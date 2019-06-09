import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.leaflet = props.leaflet;

    this._mapRef = React.createRef();
    this.icon = this.leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.layerGroup = null;
    this.map = null;
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{height: `100%`}}></div>
    );
  }

  componentDidMount() {
    this._addMap();
  }

  componentDidUpdate() {
    this.layerGroup.clearLayers();
    this._addMarkers();

    const filteredOffers = this.props.offers;
    const currentCity = filteredOffers[0].city;
    this.city = currentCity.coords;
    this.zoom = currentCity.zoom;
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

    this._addMarkers();
  }

  _addMarkers() {
    this.props.offers.map((offer) => {
      this._addMarker(offer.place.coords);
    });
  }

  _addMarker(coords) {
    const icon = this.icon;
    this.leaflet
      .marker(coords, {icon})
      .addTo(this.layerGroup);
  }
}

Map.propTypes = {
  leaflet: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        placeName: PropTypes.string,
        placeType: PropTypes.oneOf([`Apartment`, `Private room`]),
        isPremium: PropTypes.bool,
        src: PropTypes.string,
        price: PropTypes.number,
      })
  ),
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    offers: state.filteredOffers,
  });

export {Map};

export default connect(
    mapStateToProps
)(Map);
