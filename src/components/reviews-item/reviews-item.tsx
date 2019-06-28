import * as React from 'react';

import { Comment } from '../../types';
import { getRating } from '../../utilities';

interface Props {
  review: Comment,
}

const ReviewItem: React.FunctionComponent<Props> = (props) => {
  const {
    review
  } = props;

  const _getDate = (date) => {
    const options = { month: `long`, year: `numeric` };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">
        {review.user.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{ width: `${getRating(review)}` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">{review.comment}</p>
      <time className="reviews__time" dateTime={review.date}>{_getDate(review.date)}</time>
    </div>
  </li>
}

export default ReviewItem;
