import React from 'react';
import propTypes from 'prop-types';

export class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.leaflet = props.leaflet;
    this.offers = props.offers;

    this._mapRef = React.createRef();
    this.icon = this.leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{height: `100%`}}></div>
    );
  }

  componentDidMount() {
    this._addMap();
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

    this.leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    this.offers.map((offer) => {
      this._addMarker(offer.coords);
    });
  }

  _addMarker(coords) {
    const icon = this.icon;
    this.leaflet
      .marker(coords, {icon})
      .addTo(this.map);
  }
}

Map.propTypes = {
  offers: propTypes.arrayOf(
      propTypes.shape({
        placeName: propTypes.string.isRequired,
        placeType: propTypes.oneOf([`Apartment`, `Private room`]),
        isPremium: propTypes.bool,
        src: propTypes.string,
        price: propTypes.number,
      })
  ),
  leaflet: propTypes.object.isRequired,
};
