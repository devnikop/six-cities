import * as React from 'react';

import { Offer } from '../../types';

interface Props {
  activeOfferId: number,
  leaflet,
  offers: Offer[],
}

class Map extends React.PureComponent<Props> {
  private _mapRef;
  private activeIcon;
  private city;
  private currentCity;
  private icon;
  private layerGroup;
  private leaflet;
  private map;
  private zoom;

  constructor(props) {
    super(props);

    this.leaflet = props.leaflet;

    this._mapRef = React.createRef();
    this.icon = this.leaflet.icon({
      iconSize: [30, 30],
      iconUrl: `img/pin.svg`,
    });
    this.activeIcon = this.leaflet.icon({
      iconSize: [30, 30],
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

    // DON'T CHANGE CITY

    // this.currentCity = this.props.offers[0].city;
    // this.city = this.currentCity.coords;
    // this.zoom = this.currentCity.zoom;
    // this.map.setView(this.city, this.zoom);
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
    this.city = [52.38333, 4.9];
    this.zoom = 12;

    this.map = this.leaflet.map(this._mapRef.current, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.city, this.zoom);

    this.layerGroup = this.leaflet.layerGroup().addTo(this.map);

    this.leaflet
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
    this.leaflet
      .marker(coords, { icon })
      .addTo(this.layerGroup);
  }

  _addMarker(coords) {
    const icon = this.icon;
    this.leaflet
      .marker(coords, { icon })
      .addTo(this.layerGroup);
  }
}

export default Map;
