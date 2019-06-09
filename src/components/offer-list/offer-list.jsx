import {connect} from 'react-redux';
import PropTypes from 'prop-types';
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
  activeItem: PropTypes.number.isRequired,
  changeActiveItem: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        placeName: PropTypes.string,
        placeType: PropTypes.oneOf([`Apartment`, `Private room`]),
        isPremium: PropTypes.bool,
        src: PropTypes.string,
        price: PropTypes.number,
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
