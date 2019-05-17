import React from 'react';
import propTypes from 'prop-types';

export const OfferCard = (props) => {
  const {
    offer,
    onCardNameClick
  } = props;

  return <article className="cities__place-card place-card">
    <div className="place-card__mark">
      <span>{offer.isPremium ? `Premium` : ``}</span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={offer.src} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `93%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name" onClick={onCardNameClick}>
        <a href="#">{offer.placeName}</a>
      </h2>
      <p className="place-card__type">{offer.placeType}</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  offer: propTypes.shape({
    placeName: propTypes.string.isRequired,
    placeType: propTypes.oneOf([`Apartment`, `Private room`]),
    isPremium: propTypes.bool,
    src: propTypes.string,
    price: propTypes.number,
  }),

  onCardNameClick: propTypes.func,
};