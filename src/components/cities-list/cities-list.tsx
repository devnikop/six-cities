import { connect } from 'react-redux';
import * as React from 'react';

import { City } from '../../types';

import { ActionCreator } from '../../reducer/data/data';
import {
  getCities,
  getCurrentCity,
} from '../../reducer/data/selectors';

interface Props {
  cities: City[],
  currentCity: City,
  onCity: (city: City) => void,
}

const MAX_CITIES_COUNT = 6;

const CitiesList: React.FunctionComponent<Props> = (props) => {
  const {
    cities,
    currentCity,
    onCity,
  } = props;

  const _checkCurrentCity = (city) => city === currentCity;
  const _isActiveCity = (city) => _checkCurrentCity(city) ? `tabs__item--active` : ``;

  return <div className="cities tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.slice(0, MAX_CITIES_COUNT).map((it, i) =>
          <li className="locations__item" key={`city-${i}`}>
            <a
              className={`locations__item-link tabs__item ${_isActiveCity(it)} `}
              href={_checkCurrentCity(it) ? undefined : `#`}
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

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cities: getCities(state),
    currentCity: getCurrentCity(state),
  });

const mapDispatchToProps = (dispatch) => ({
  onCity: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.setSortedOffersByCity(city));
  },
});

export { CitiesList };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesList);
