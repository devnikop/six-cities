import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Subtract } from 'utility-types';
import * as React from 'react';

import { Operation } from '../../reducer/favorite/favorite';

interface InjectedProps {
  postFavoriteOffer: React.MouseEventHandler<HTMLButtonElement>,
}

const withBookmark = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithBookmark extends React.PureComponent<T> {
    constructor(props) {
      super(props);

      this._handleBookmarkClick = this._handleBookmarkClick.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        onBookmarkClick={this._handleBookmarkClick}
      />;
    }

    _handleBookmarkClick(offer) {
      this.props.postFavoriteOffer(offer);
    }
  }

  return WithBookmark;
}

const mapDispatchToProps = (dispatch) => ({
  postFavoriteOffer: (offer) =>
    dispatch(Operation.postFavoriteOffer(offer)),
});

export default compose(
  connect(null, mapDispatchToProps),
  withBookmark
);
