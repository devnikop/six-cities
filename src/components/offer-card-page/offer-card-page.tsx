import * as React from 'react';
import {connect} from 'react-redux';
import * as leaflet from 'leaflet';

import {
  getActiveOfferId,
  getNearestOffers,
  getOfferById,
} from '../../reducer/data/selectors';
import {Offer} from '../../types';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import ReviewList from '../reviews-list/reviews-list';

interface Props {
  activeOfferId: number,
  match,
  nearestOffers: Offer[],
  offer: Offer,
}

const OfferListWrapped = withActiveItem(OfferList);

const OfferCardPage: React.FunctionComponent<Props> = (props) => {
  const {
    activeOfferId,
    nearestOffers,
    offer,
  } = props;

  const _getPremiumMark = () =>
    <div className="property__mark">
      <span>Premium</span>
    </div>

  const _getRating = (offer) =>`${Math.round(offer.rating * 20)}%`;

  return <main className="page__main page__main--property">
  <section className="property">
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.map((image) =>
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
          <button className="property__bookmark-button button" type="button">
            <svg className="property__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{width: _getRating(offer)}}></span>
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
            {/* <p className="property__text">
              An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
            </p> */}
          </div>
        </div>
        <section className="property__reviews reviews">
          {<ReviewList offerId={offer.id}/>}
          <form className="reviews__form form" action="#" method="post">
            <label className="reviews__label form__label" htmlFor="review">Your review</label>
            <div className="reviews__rating-form form__rating">
              <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
              <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
              <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
              <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
              <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
              <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </div>
            <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
            <div className="reviews__button-wrapper">
              <p className="reviews__help">
                To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
              </p>
              <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
    <section className="property__map map">
      <Map
        activeOfferId={activeOfferId}
        leaflet={leaflet}
        offers={nearestOffers}
      />
    </section>
  </section>
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {<OfferListWrapped
          offers={nearestOffers}
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
    offer: getOfferById(id, state),
    nearestOffers: getNearestOffers(state),
  })
};

export {OfferCardPage}

export default connect(
  mapStateToProps
)(OfferCardPage);
