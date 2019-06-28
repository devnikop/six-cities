import * as React from 'react';

import {
  City,
  Offer,
  OfferPageType,
} from '../../types';

import OfferList from '../offer-list/offer-list';
import FavoriteEmpty from '../favorites-empty/favorites-empty';

interface Props {
  cities: City[],
  getOffersOfCity: (city: City) => Offer[],
}

const Favorites: React.FunctionComponent<Props> = (props) => {
  const {
    cities,
    getOffersOfCity,
  } = props;

  return !cities.length
    ? <FavoriteEmpty />
    : <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city) => {
              const offers = getOffersOfCity(city);
              return <li key={`city-${city}`} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {<OfferList
                    offers={offers}
                    type={OfferPageType.FAVORITE}
                  />}
                </div>
              </li>
            })}
          </ul>
        </section>
      </div>
    </main>;
};

export default Favorites;
