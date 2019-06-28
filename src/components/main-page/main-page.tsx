import { connect } from 'react-redux';
import * as React from 'react';

import {
  City,
  Offer,
  OfferType,
} from '../../types';

import {
  getActiveOfferId,
  getCurrentCity,
  getSortedOffers,
} from '../../reducer/data/selectors';

import withSortingOptions from '../../hocs/with-sorting-options/with-sorting-options';

import CitiesList from '../cities-list/cities-list';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import SortingOptions from '../sorting-options/sorting-options';

interface Props {
  activeOfferId: number,
  currentCity: City,
  leaflet,
  offers: Offer[],
}

const SortingOptionsWrapped = withSortingOptions(SortingOptions);

const MainPage: React.FunctionComponent<Props> = (props) => {
  const {
    activeOfferId,
    currentCity,
    leaflet,
    offers,
  } = props;

  return <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <CitiesList />
    {/* {sortedOffers */}
    {false
      ? <MainPageEmpty currentCity={currentCity} />
      : <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentCity}</b>
            {<SortingOptionsWrapped />}
            <div className="cities__places-list places__list tabs__content">
              {<OfferList
                offers={offers}
                type={OfferType.main}
              />}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                activeOfferId={activeOfferId}
                leaflet={leaflet}
                offers={offers}
              />
            </section>
          </div>
        </div>
      </div>
    }
  </main>;
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    activeOfferId: getActiveOfferId(state),
    currentCity: getCurrentCity(state),
    offers: getSortedOffers(state),
  });

export { MainPage };

export default connect(
  mapStateToProps
)(MainPage);
