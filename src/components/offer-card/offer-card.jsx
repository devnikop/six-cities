import propTypes from 'prop-types';
import React from 'react';

const DOES_NOT_EXIST = -1;

const OfferCard = (props) => {
  const {
    currentId,
    offer,
    onCardClick,
    onCardHover
  } = props;

  const onImageClick = (evt) => {
    evt.preventDefault();
    onCardClick(currentId);
  };

  const onCardMouseEnter = () => {
    onCardHover(currentId);
  };

  const onCardMouseLeave = () => {
    onCardHover(DOES_NOT_EXIST);
  };

  const isPremium = () =>
    offer.isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``;

  return <article className="cities__place-card place-card" onMouseEnter={onCardMouseEnter} onMouseLeave={onCardMouseLeave}>
    {isPremium()}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#" onClick={onImageClick}>
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
      <h2 className="place-card__name">
        <a href="#">{offer.placeName}</a>
      </h2>
      <p className="place-card__type">{offer.placeType}</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  currentId: propTypes.number,
  onCardClick: propTypes.func,
  onCardHover: propTypes.func,
  offer: propTypes.shape({
    placeName: propTypes.string.isRequired,
    placeType: propTypes.oneOf([`Apartment`, `Private room`]),
    isPremium: propTypes.bool,
    src: propTypes.string,
    price: propTypes.number,
  }),
};

export default OfferCard;
