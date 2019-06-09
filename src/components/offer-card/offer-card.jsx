import PropTypes from 'prop-types';
import React from 'react';

const OfferCard = (props) => {
  const {
    active,
    currentId,
    offer,
    onCardClick,
  } = props;

  const activeCard = active ? `cities__place-card--active` : ``;

  const onImageClick = (evt) => {
    evt.preventDefault();
    onCardClick(currentId);
  };

  const isPremium = () =>
    offer.isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``;

  const getRating = () =>`${offer.rating * 10}%`;

  return <article className={`cities__place-card ${activeCard}place-card`}>
    {isPremium()}
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
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: getRating()}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{offer.title}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  active: PropTypes.number,
  currentId: PropTypes.number,
  onCardClick: PropTypes.func,
  offer: PropTypes.shape({
    placeName: PropTypes.string,
    placeType: PropTypes.oneOf([`Apartment`, `Private room`]),
    isPremium: PropTypes.bool,
    src: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default OfferCard;
