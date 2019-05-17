import React from 'react';
import propTypes from 'prop-types';

import {OfferCard} from '../offer-card/offer-card.jsx';

export class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerCard: -1,
    };
  }

  render() {
    return this._getOfferCard();
  }

  _getOfferCard() {
    const {
      offers,
      onCardNameClick
    } = this.props;

    return offers.map((it, i) => <OfferCard key={i}
      offer={it}
      onCardNameClick={onCardNameClick}
    />
    );
  }
}

OfferList.propTypes = {
  offers: propTypes.arrayOf(
      propTypes.shape({
        placeName: propTypes.string.isRequired,
        placeType: propTypes.oneOf([`Apartment`, `Private room`]),
        isPremium: propTypes.bool,
        src: propTypes.string,
        price: propTypes.number,
      })
  ),
  onCardNameClick: propTypes.func,
};
