import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import {
  getCurrentCity,
  getFilteredOffers
} from '../../reducer/data/selectors';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

import CitiesList from '../cities-list/cities-list.jsx';
import Map from '../map/map.jsx';
import OfferList from '../offer-list/offer-list.jsx';

const OfferListWrapped = withActiveItem(OfferList);

const MainPage = (props) => {
  const {
    currentCity,
    leaflet,
    offers,
  } = props;

  const _getOfferList = () => {
    return <OfferListWrapped/>;
  };

  return <>
    <h1 className="visually-hidden">Cities</h1>
    <CitiesList/>
    <div className="cities__places-wrapper">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentCity}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
            {/*
                <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select> */}

          </form>
          <div className="cities__places-list places__list tabs__content">
            {_getOfferList()}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              leaflet={leaflet}
            />
          </section>
        </div>
      </div>
    </div>
  </>;
};

MainPage.propTypes = {
  currentCity: PropTypes.string.isRequired,
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
    currentCity: getCurrentCity(state),
    offers: getFilteredOffers(state),
  });

export {MainPage};

export default connect(
    mapStateToProps
)(MainPage);