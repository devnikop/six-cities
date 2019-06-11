import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import {ActionCreator} from '../../reducer/data/data';
import {
  getCities,
  getCurrentCity,
  getFilteredOffers,
} from '../../reducer/data/selectors';

const CITIES_COUNT = 6;

const CitiesList = (props) => {
  const {
    cities,
    currentCity,
    onCity,
  } = props;

  const checkCurrentCity = (city) => city === currentCity;
  const isActiveCity = (city) => checkCurrentCity(city) ? `tabs__item--active` : ``;

  return <div className="cities tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.slice(0, CITIES_COUNT).map((it, i) =>
          <li className="locations__item" key={`city-${i}`}>
            <a
              className={`locations__item-link tabs__item ${isActiveCity(it)} `}
              href={checkCurrentCity(it) ? undefined : `#`}
              onClick={() => onCity(it)}
            >
              <span>{it}</span>
            </a>
          </li>
        )}
      </ul>
    </section>
  </div>;
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  currentCity: PropTypes.string.isRequired,
  onCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cities: getCities(state),
    currentCity: getCurrentCity(state),
    filteredOffers: getFilteredOffers(state),
  });

const mapDispatchToProps = (dispatch) => ({
  onCity: (city) => {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesList};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitiesList);
