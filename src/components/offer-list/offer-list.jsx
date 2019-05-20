import React from 'react';
import propTypes from 'prop-types';

import {OfferCard} from '../offer-card/offer-card.jsx';

export class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerCard: -1,
    };

    this.onCardHover = this.onCardHover.bind(this);
    this.onCardClick = this.onCardClick.bind(this);
  }

  render() {
    return this._getOfferCard();
  }

  _getOfferCard() {
    const {
      offers
    } = this.props;

    return offers.map((it, i) => <OfferCard
      key={i}
      currentId={i}
      offer={it}
      onCardClick={this.onCardClick}
      onCardHover={this.onCardHover}
    />
    );
  }

  onCardClick(currentCard) {
    this.setState({
      offerCard: currentCard,
    });
  }

  onCardHover(currentCard) {
    this.setState({
      offerCard: currentCard,
    });
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
  onCardClick: propTypes.func,
};
