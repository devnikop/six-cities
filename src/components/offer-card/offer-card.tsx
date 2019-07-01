import * as React from 'react';

import history from '../../history';
import {
  Offer,
  OfferPageType
} from '../../types';
import { getRating } from '../../utilities';

interface Props {
  onActiveItem: (id: number) => void,
  onBookmarkClick: (offer: Offer) => void,
  offer: Offer,
  type: OfferPageType,
}

const OfferCard: React.FunctionComponent<Props> = (props) => {
  const {
    onActiveItem,
    onBookmarkClick,
    offer,
    type,
  } = props;

  const handleImageClick = (evt) => {
    evt.preventDefault();
    onActiveItem(offer.id);
  };

  const _handleBookmarkClick = () => onBookmarkClick(offer);

  const _handleOfferClick = () => {
    onActiveItem(offer.id);
    history.push(`/offer/${offer.id}`);
  };

  const _getPremiumMark = () =>
    <div className="place-card__mark">
      <span>Premium</span>
    </div>

  const _checkFavorite = (isFavorite) =>
    isFavorite ? `place-card__bookmark-button--active` : ``;

  return <article className={`${type}__card place-card`}>
    {offer.isPremium ? _getPremiumMark() : ``}
    <div className={`${type}__image-wrapper place-card__image-wrapper`}>
      <a href="#" onClick={handleImageClick}>
        <img
          className="place-card__image"
          src={offer.previewImage}
          width={`${type === OfferPageType.FAVORITE ? `150` : `260`}`}
          height={`${type === OfferPageType.FAVORITE ? `110` : `200`}`}
          alt="Place image"
        />
      </a>
    </div>
    <div className={`${type === OfferPageType.FAVORITE ? `favorites__card-info` : ``} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          onClick={_handleBookmarkClick}
          className={`place-card__bookmark-button ${_checkFavorite(offer.isFavorite)} button`}
          type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: getRating(offer) }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a onClick={_handleOfferClick}>{offer.title}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

export default OfferCard;
