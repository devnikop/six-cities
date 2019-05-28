import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

import {OfferCard} from '../offer-card/offer-card.jsx';

class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerCard: -1,
    };

    this.onCardHover = this.onCardHover.bind(this);
    this.onCardClick = this.onCardClick.bind(this);
  }

  render() {
    const {
      offers
    } = this.props;

    return offers.map((it, i) => <OfferCard
      key={`offer-${i}`}
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
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    offers: state.filteredOffers,
  });

export {OfferList};

export default connect(
    mapStateToProps
)(OfferList);
