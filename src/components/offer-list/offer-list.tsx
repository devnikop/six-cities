import * as React from 'react';

import {Offer} from '../../types';

import OfferCard from '../offer-card/offer-card';

interface Props {
  activeItem: number,
  changeActiveItem: () => void,
  offers: Offer[],
}

class OfferList extends React.PureComponent<Props> {
  render() {
    const {
      activeItem,
      changeActiveItem,
      offers
    } = this.props;

    return offers.map((it, i) => <OfferCard
      active={activeItem === i ? activeItem : undefined}
      // currentId={i}
      key={`offer-${i}`}
      offer={it}
      onCardClick={changeActiveItem}
    />
    );
  }
}

export default OfferList;
