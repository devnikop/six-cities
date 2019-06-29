import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Subtract } from 'utility-types';
import * as React from 'react';

import { Offer } from '../../types';

import { getFavoriteOffers } from '../../reducer/favorite/selectors';
import { Operation } from '../../reducer/favorite/favorite';

interface InjectedProps {
  offers: Offer[],
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
      const {
        offers,
      } = this.props;

      return <Component
        {...this.props}
        offers={offers}
      />;
    }
  }

  return WithFavorite;
}

const mapStateToProps = (state) =>
  Object.assign({}, state, {
    offers: getFavoriteOffers(state),
  });

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers: () => dispatch(Operation.loadFavoriteOffers()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFavorite,
);
