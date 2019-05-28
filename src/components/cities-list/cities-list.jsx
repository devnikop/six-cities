import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer';

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
              {...(checkCurrentCity(it) || {href: `#`})}
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
  cities: propTypes.arrayOf(propTypes.string),
  currentCity: propTypes.string.isRequired,
  onCity: propTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cities: state.cities,
    currentCity: state.currentCity,
    filteredOffers: state.filteredOffers,
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