import {compose} from 'recompose';
import {connect} from 'react-redux';
import * as React from 'react';
import {Subtract} from 'utility-types';

import {configureAPI} from '../../api';
import {adaptComments} from '../../adapter';
import {ActionCreator} from '../../reducer/data/data';


interface InjectedProps {
  handleCommentInput: React.FormEventHandler<HTMLTextAreaElement>,
  handleFormSubmit: React.FormEventHandler<HTMLFormElement>,
  handleRatingChange: React.ChangeEventHandler<HTMLFormElement>,
  onFormSubmit: (formData: React.ComponentState) => void,
}

interface State {
  comment: string,
  rating: number,
}

const withReview = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithReview extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        rating: 0,
      }

      this._handleCommentInput = this._handleCommentInput.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        handleCommentInput={this._handleCommentInput}
        handleFormSubmit={this._handleFormSubmit}
        handleRatingChange={this._handleRatingChange}
      />;
    }

    _handleCommentInput(evt) {
      this.setState({
        comment: evt.target.value,
      })
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      this.props.onFormSubmit(this.state, this.props.offerId);
    }

    _handleRatingChange(evt) {
      if (evt.target.type === `radio`) {
        this.setState({
          rating: evt.target.value,
        })
      }
    }
  }

  return WithReview;
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (formData, offerId) => {
    configureAPI(dispatch)
      .post(`/comments/${offerId}`, formData)
      .then((response) =>
        adaptComments(response.data)
      )
      .then((data) =>
        dispatch(ActionCreator.loadReviews(data))
      );
  }
});

export default compose(
    connect(null, mapDispatchToProps),
    withReview
);
