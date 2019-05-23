import React from 'react';
import propTypes from 'prop-types';
import leaflet from 'leaflet';

export class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
    this.icon = leaflet.icon({
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

    this.map = leaflet.map(this._mapRef.current, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.city, this.zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    const {offers} = this.props;
    offers.map((offer) => {
      this._addMarker(offer.coords);
    });
  }

  _addMarker(coords) {
    const icon = this.icon;
    leaflet
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
};
