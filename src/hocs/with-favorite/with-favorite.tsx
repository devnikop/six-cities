import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Subtract } from 'utility-types';
import * as React from 'react';

import {
  City,
  Offer,
} from '../../types';

import {
  getFavoriteOffersCities,
  getFavoriteOffersOfCity,
} from '../../reducer/favorite/selectors';
import { Operation } from '../../reducer/favorite/favorite';

interface InjectedProps {
  cities: City[],
  getOffersOfCity: (city: City) => Offer[],
  loadFavoriteOffers: () => void,
}

const withFavorite = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithFavorite extends React.PureComponent<T> {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.loadFavoriteOffers();
    }

    render() {
      return <Component
        {...this.props}
        cities={this.props.cities}
        getOffersOfCity={this.props.getOffersOfCity}
      />;
    }
  }

  return WithFavorite;
}

const mapStateToProps = (state) =>
  Object.assign({}, state, {
    cities: getFavoriteOffersCities(state),
    getOffersOfCity: (city) => getFavoriteOffersOfCity(city, state),
  });

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers: () => dispatch(Operation.loadFavoriteOffers()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFavorite,
);
