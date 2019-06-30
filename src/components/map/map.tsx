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

const CityDefault = {
  Coords: {
    LATITUDE: 52.38333,
    LONGITUDE: 4.9,
  },
  ZOOM: 12,
};

class Map extends React.PureComponent<Props> {
  private _mapRef;
  private activeIcon;
  private city;
  private currentCity;
  private icon;
  private layerGroup;
  private map;
  private zoom;

  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
    this.icon = leaflet.icon({
      iconSize: [IconSize.WIDTH, IconSize.HEIGHT],
      iconUrl: `img/pin.svg`,
    });
    this.activeIcon = leaflet.icon({
      iconSize: [IconSize.WIDTH, IconSize.HEIGHT],
      iconUrl: `img/pin-active.svg`,
    });
    this.layerGroup = null;
    this.map = null;
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{ height: `100%` }}></div>
    );
  }

  componentDidMount() {
    this._addMap();
  }

  componentDidUpdate() {
    this.layerGroup.clearLayers();
    this._addMarkers(this.props.offers);

    this.currentCity = this.props.offers[0].city;
    this.city = this.currentCity.coords;
    this.zoom = this.currentCity.zoom;
    this.map.setView(this.city, this.zoom);
  }

  _addMap() {
    this.city = [CityDefault.Coords.LATITUDE, CityDefault.Coords.LONGITUDE];
    this.zoom = CityDefault.ZOOM;

    this.map = leaflet.map(this._mapRef.current, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.city, this.zoom);

    this.layerGroup = leaflet.layerGroup().addTo(this.map);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this._addMarkers(this.props.offers);
  }

  _addMarkers(offers) {
    offers.map((offer) => {
      if (this.props.activeOfferId && this.props.activeOfferId === offer.id) {
        this._addActiveMarker(offer.place.coords);
      } else {
        this._addMarker(offer.place.coords);
      }
    });
  }

  _addActiveMarker(coords) {
    const icon = this.activeIcon;
    leaflet
      .marker(coords, { icon })
      .addTo(this.layerGroup);
  }

  _addMarker(coords) {
    const icon = this.icon;
    leaflet
      .marker(coords, { icon })
      .addTo(this.layerGroup);
  }
}

export default Map;
