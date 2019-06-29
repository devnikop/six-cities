import * as React from 'react';

import {
  Offer,
  OfferPageType,
} from '../../types';
import { extractUniqueCities } from '../../utilities';

import OfferList from '../offer-list/offer-list';
import FavoriteEmpty from '../favorites-empty/favorites-empty';

interface Props {
  offers: Offer[],
}

const Favorites: React.FunctionComponent<Props> = (props) => {
  const {
    offers,
  } = props;

  const getOffersOfCity = (offers, city) =>
    offers.filter((offer) => offer.city.name === city);

  const cities = extractUniqueCities(offers);

  return !cities.length
    ? <FavoriteEmpty />
    : <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city) => {
              return <li key={`city-${city}`} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {<OfferList
                    offers={getOffersOfCity(offers, city)}
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
