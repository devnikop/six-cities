import {connect} from 'react-redux';
import propTypes from 'prop-types';
import React from 'react';

import OfferCard from '../offer-card/offer-card.jsx';

class OfferList extends React.PureComponent {
  render() {
    const {
      activeItem,
      changeActiveItem,
      offers
    } = this.props;

    return offers.map((it, i) => <OfferCard
      active={activeItem === i ? activeItem : undefined}
      currentId={i}
      key={`offer-${i}`}
      offer={it}
      onCardClick={changeActiveItem}
    />
    );
  }
}

OfferList.propTypes = {
  activeItem: propTypes.number.isRequired,
  changeActiveItem: propTypes.func.isRequired,
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
