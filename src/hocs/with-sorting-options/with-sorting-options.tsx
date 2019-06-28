import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Subtract } from 'utility-types';
import * as React from 'react';

import { Offer } from '../../types';

import { ActionCreator } from '../../reducer/data/data';
import { getOffersOfCity } from '../../reducer/data/selectors';

interface InjectedProps {
  offers: Offer[],
  onSelectChange: (sortedOffers: Offer[]) => void;
}

const withSortingOptions = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithSortingOptions extends React.PureComponent<T> {

    constructor(props) {
      super(props);
    }

    render() {
      return <Component
        handleSelectChange={this._handleSelectChange}
      />;
    }

    _sortByPopular = () => {
      return this.props.offers;
    };

    _sortByPriceLowToHigh = (initialOffers) => {
      const sortedOffers = [...initialOffers];
      sortedOffers.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        } else {
          return 0;
        }
      })
      return sortedOffers;
    };

    _sortByPriceHighToLow = (initialOffers) => {
      const sortedOffers = [...initialOffers];
      sortedOffers.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        } else {
          return 0;
        }
      })
      return sortedOffers;
    };

    _sortByRating = (initialOffers) => {
      const sortedOffers = [...initialOffers];
      sortedOffers.sort((a, b) => {
        if (a.rating > b.rating) {
          return -1;
        } else if (a.rating < b.rating) {
          return 1;
        } else {
          return 0;
        }
      })
      return sortedOffers;
    };

    _handleSelectChange = (evt) => {
      const { onSelectChange, offers } = this.props;
      switch (evt.target.value) {
        case `popular`:
          onSelectChange(this._sortByPopular());
          break;
        case `to-high`:
          onSelectChange(this._sortByPriceLowToHigh(offers));
          break;
        case `to-low`:
          onSelectChange(this._sortByPriceHighToLow(offers));
          break;
        case `top-rated`:
          onSelectChange(this._sortByRating(offers));
          break;
        default:
          break;
      }
    };
  }
  return WithSortingOptions;
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    offers: getOffersOfCity(state),
  })

const mapDispatchToProps = (dispatch) => ({
  onSelectChange: (sortedOffers) => {
    dispatch(ActionCreator.setSortedOffers(sortedOffers));
  }
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withSortingOptions
);
