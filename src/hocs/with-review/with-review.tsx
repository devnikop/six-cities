import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Subtract } from 'utility-types';
import * as React from 'react';

import { Operation } from '../../reducer/reviews/reviews';

interface InjectedProps {
  handleCommentChange: React.FormEventHandler<HTMLTextAreaElement>,
  handleFormSubmit: React.FormEventHandler<HTMLFormElement>,
  handleRatingChange: React.ChangeEventHandler<HTMLFormElement>,
  postReview: (formData: React.ComponentState) => void,
}

interface State {
  comment: string,
  isCommentValid: boolean,
  isFormDisabled: boolean,
  isRatingValid: boolean,
  isSubmitButtonDisabled: boolean,
  rating: number,
}

const CommentLengthLimit = {
  MAX: 300,
  MIN: 50,
};

const withReview = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithReview extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        isCommentValid: false,
        isFormDisabled: false,
        isRatingValid: false,
        isSubmitButtonDisabled: true,
        rating: 0,
      }

      this._handleCommentChange = this._handleCommentChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    render() {
      const {
        comment,
        isFormDisabled,
        isSubmitButtonDisabled,
      } = this.state;

      return <Component
        {...this.props}
        comment={comment}
        onCommentChange={this._handleCommentChange}
        onFormSubmit={this._handleFormSubmit}
        onRatingChange={this._handleRatingChange}
        isFormDisabled={isFormDisabled}
        isSubmitButtonDisabled={isSubmitButtonDisabled}
      />;
    }

    _checkElementsValidity() {
      const {
        isCommentValid,
        isRatingValid,
      } = this.state;

      isCommentValid && isRatingValid
        ? this._setSubmitButtonCondition(false)
        : this._setSubmitButtonCondition(true)
    }

    _handleCommentChange(evt) {
      const comment = evt.target.value;
      this._setComment(comment);

      const commentLength = comment.length;
      if (commentLength >= CommentLengthLimit.MIN && commentLength <= CommentLengthLimit.MAX) {
        this._setCommentValidity(true);
      } else {
        this._setCommentValidity(false);
      }
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      this.props.postReview(this.props.offerId, {
        comment: this.state.comment,
        rating: this.state.rating
      });
      // this._setFormCondition(true);
      this._setComment(``);
    }

    _handleRatingChange(evt) {
      if (evt.target.type === `radio`) {
        this._setRating(evt.target.value);
        this._setRatingValidity(true);
      }
    }

    _setComment(comment) {
      this.setState({
        comment,
      })
    }

    _setCommentValidity(bool) {
      this.setState(
        { isCommentValid: bool },
        () => this._checkElementsValidity()
      )
    }

    _setFormCondition(bool) {
      this.setState({
        isFormDisabled: bool,
      })
    }

    _setRating(rating) {
      this.setState({
        rating,
      })
    }

    _setRatingValidity(bool) {
      this.setState(
        { isRatingValid: bool },
        () => this._checkElementsValidity()
      )
    }

    _setSubmitButtonCondition(bool) {
      this.setState({
        isSubmitButtonDisabled: bool,
      })
    }
  }

  return WithReview;
};

const mapDispatchToProps = (dispatch) => ({
  postReview: (offerId, formData) =>
    dispatch(Operation.postReview(offerId, formData)),
});

export default compose(
  connect(null, mapDispatchToProps),
  withReview
);
