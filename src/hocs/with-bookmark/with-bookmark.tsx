import {connect} from 'react-redux';
import {compose} from 'recompose';
import * as React from 'react';
import {Subtract} from 'utility-types';

import {ActionCreator} from '../../reducer/data/data';
import {configureAPI} from '../../api';
import {Offer} from '../../types';
import {adaptOffer} from '../../adapter';


interface InjectedProps {
  handleBookmarkClick: React.MouseEventHandler<HTMLButtonElement>,
  offer: Offer,
  onFormSubmit: (offer: Offer) => void,
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

    _handleBookmarkClick() {
      this.props.onBookmarkClick(this.props.offer);
    }
  }

  return WithBookmark;
}

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick: (offer) => {
    configureAPI(dispatch)
      .post(`/favorite/${offer.id}/${+!offer.isFavorite}`)
      .then((response) =>
        adaptOffer(response.data)
      )
      .then((data) => {
        dispatch(ActionCreator.changeOffer(data));
      });
  }
});

export default compose(
  connect(null, mapDispatchToProps),
  withBookmark
);
