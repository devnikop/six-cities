import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as React from 'react';
import { Subtract } from 'utility-types';

import { Operation } from '../../reducer/favorite/favorite';

interface InjectedProps {
  handleBookmarkClick: React.MouseEventHandler<HTMLButtonElement>,
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
        handleBookmarkClick={this._handleBookmarkClick}
      />;
    }

    _handleBookmarkClick(offer) {
      this.props.onBookmarkClick(offer);
    }
  }

  return WithBookmark;
}

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick: (offer) =>
    dispatch(Operation.postFavoriteOffer(offer)),
});

export default compose(
  connect(null, mapDispatchToProps),
  withBookmark
);
