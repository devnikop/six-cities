import * as React from 'react';
import * as leaflet from 'leaflet';

import { Offer } from '../../types';

interface Props {
  activeOfferId: number,
  offers: Offer[],
}

const IconSize = {
  WIDTH: 30,
  HEIGHT: 30,
};

class Map extends React.PureComponent<Props> {
  private _mapRef;
  private _layerGroup;
  private _map;

  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{ height: `100%` }}></div>
    );
  }

  componentDidMount() {
    this._initMap();
  }

  componentDidUpdate() {
    const {
      activeOfferId,
      offers,
    } = this.props;

    const city = offers[0].city;
    this._setFocus(city);

    this._clearMarkersField();
    this._addMarkers(offers, activeOfferId);
  }

  _addActiveMarker(coords) {
    leaflet
      .marker(coords, { icon: this._iconActive })
      .addTo(this._layerGroup);
  }

  _addMarker(coords) {
    leaflet
      .marker(coords, { icon: this._icon })
      .addTo(this._layerGroup);
  }

  _addMarkers(offers, activeOfferId) {
    offers.map((offer) => {
      if (activeOfferId && activeOfferId === offer.id) {
        this._addActiveMarker(offer.place.coords);
        if (!window.location.pathname.includes(`offer`)) {
          this._changeFocus(offer.place);
        }
      } else {
        this._addMarker(offer.place.coords);
      }
    });
  }

  _addMarkersField() {
    this._layerGroup = leaflet.layerGroup().addTo(this._map);
  }

  _changeFocus(place) {
    this._map.flyTo(place.coords, place.zoom);
  }

  _clearMarkersField() {
    this._layerGroup.clearLayers();
  }

  _icon = leaflet.icon({
    iconSize: [IconSize.WIDTH, IconSize.HEIGHT],
    iconUrl: `img/pin.svg`,
  });

  _iconActive = leaflet.icon({
    iconSize: [IconSize.WIDTH, IconSize.HEIGHT],
    iconUrl: `img/pin-active.svg`,
  });

  _initMap() {
    const {
      activeOfferId,
      offers,
    } = this.props;

    if (offers.length === 0) {
      return null;
    }

    const city = offers[0].city;
    this._setInitialMapData(city);
    this._setFocus(city);
    this._setLeafletData();
    this._addMarkersField();
    this._addMarkers(offers, activeOfferId);
  }

  _setFocus(place) {
    this._map.setView(place.coords, place.zoom);
  }

  _setInitialMapData(city) {
    this._map = leaflet.map(this._mapRef.current, {
      center: city.coords,
      zoom: city.zoom,
      zoomControl: false,
      marker: true
    });
  }

  _setLeafletData() {
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
  }
}

export default Map;
