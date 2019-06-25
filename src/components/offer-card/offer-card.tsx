import * as React from 'react';
import {Link} from 'react-router-dom';

import {Offer} from '../../types';

interface Props {
  active: number,
  offer: Offer,
  onCardClick: (id: number) => void,
}

const OfferCard: React.FunctionComponent<Props> = (props) => {
  const {
    active,
    offer,
    onCardClick,
  } = props;

  const activeCard = active ? `cities__place-card--active` : ``;

  const onImageClick = (evt) => {
    evt.preventDefault();
    onCardClick(offer.id);
  };

  const _getPremiumMark = () =>
    <div className="place-card__mark">
      <span>Premium</span>
    </div>

  const _checkFavorite = (isFavorite) =>
    isFavorite ? `place-card__bookmark-button--active` : ``;

  const _getRating = (offer) =>`${Math.round(offer.rating * 20)}%`;

  return <article className={`cities__place-card ${activeCard}place-card`}>
    {offer.isPremium ? _getPremiumMark() : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#" onClick={onImageClick}>
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
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
          <span style={{width: _getRating(offer)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

export default OfferCard;
