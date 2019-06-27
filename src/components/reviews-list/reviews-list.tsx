import { connect } from 'react-redux';
import * as React from 'react';

import { Comment } from '../../types';

import { getReviews } from '../../reducer/data/selectors';
import { Operation } from '../../reducer/data/data';

import ReviewItem from '../reviews-item/reviews-item';

interface Props {
  offerId: number,
  onLoadReviews: (id: number) => void,
  reviews: Comment[],
}

class ReviewList extends React.PureComponent<Props> {
  render() {
    const {
      reviews,
    } = this.props;

    return <>
      <h2 className="reviews__title">Reviews &middot;
      <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review, it) => <ReviewItem
          key={`review${it}`}
          review={review}
        />)}
      </ul>
    </>;
  }

  componentDidMount() {
    const {
      offerId,
      onLoadReviews,
    } = this.props;

    onLoadReviews(offerId);
  }
}

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadReviews: (id) => dispatch(Operation.loadReviews(id)),
});

export { ReviewList };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewList);
