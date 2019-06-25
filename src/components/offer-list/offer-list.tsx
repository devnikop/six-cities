import * as React from 'react';

import {Offer} from '../../types';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

import OfferCard from '../offer-card/offer-card';

const OfferListWrapped = withActiveItem(OfferCard);

interface Props {
  offers: Offer[],
}

class OfferList extends React.PureComponent<Props> {
  render() {
    const {
      offers
    } = this.props;

    return offers.map((offer, i) => <OfferListWrapped
      key={`offer-${i}`}
      offer={offer}
    />
    );
  }
}

export default OfferList;
