import { connect } from 'react-redux';
import * as React from 'react';

import {
  Offer,
  OfferPageType,
  User,
} from '../../types';
import { isAuthorized, getRating } from '../../utilities';

import {
  getActiveOfferId,
  getNearestOffers,
  getOfferById,
} from '../../reducer/data/selectors';
import { getUserData } from '../../reducer/user/selectors';

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withReview from '../../hocs/with-review/with-review';

import CommentForm from '../comment-form/comment-form';
import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import ReviewList from '../reviews-list/reviews-list';

interface Props {
  activeOfferId: number,
  onBookmarkClick: (offer: Offer) => void,
  match,
  nearestOffers: Offer[],
  offer: Offer,
  user: User,
}

const MAX_IMAGES_COUNT = 6;

const CommentFormWrapped = withReview(CommentForm);
const OfferListWrapped = withActiveItem(OfferList);

const OfferCardPage: React.FunctionComponent<Props> = (props) => {
  const {
    activeOfferId,
    onBookmarkClick,
    nearestOffers,
    offer,
    user,
  } = props;

  const _handleBookmarkClick = () => onBookmarkClick(offer);

  const _getPremiumMark = () =>
    <div className="property__mark">
      <span>Premium</span>
    </div>

  const _checkFavorite = (isFavorite) =>
    isFavorite ? `property__bookmark-button--active` : ``;

  if (!offer) {
    return <div />;
  }

  return <main className="page__main page__main--property">
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {offer.images.slice(0, MAX_IMAGES_COUNT).map((image) =>
            <div className="property__image-wrapper" key={`image${image}`}>
              <img className="property__image" src={image} alt="Photo studio" />
            </div>
          )}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {offer.isPremium ? _getPremiumMark() : ``}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {offer.title}
            </h1>
            <button
              onClick={_handleBookmarkClick}
              className={`property__bookmark-button ${_checkFavorite(offer.isFavorite)} button`}
              type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: getRating(offer) }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{offer.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {offer.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {offer.bedrooms} Bedrooms
          </li>
            <li className="property__feature property__feature--adults">
              Max {offer.maxAdults} adults
          </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{offer.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {offer.goods.map((item) =>
                <li className="property__inside-item" key={`item-${item}`}>
                  {item}
                </li>
              )}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src={offer.host.avatar} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {offer.host.name}
              </span>
              <span className="property__user-status">
                {offer.host.isPro ? `Pro` : ``}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {offer.description}
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            {<ReviewList offerId={offer.id} />}
            {isAuthorized(user) ? <CommentFormWrapped offerId={offer.id} /> : ``}
          </section>
        </div>
      </div>
      <section className="property__map map">
        {<Map
          activeOfferId={activeOfferId}
          offers={nearestOffers}
        />}
      </section>
    </section>
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {<OfferListWrapped
            offers={nearestOffers}
            type={OfferPageType.MAIN}
          />}
        </div>
      </section>
    </div>
  </main>
};

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id);
  return Object.assign({}, ownProps, {
    activeOfferId: getActiveOfferId(state),
    nearestOffers: getNearestOffers(id, state),
    offer: getOfferById(id, state),
    user: getUserData(state),
  })
};

export { OfferCardPage }

export default connect(
  mapStateToProps
)(OfferCardPage);
