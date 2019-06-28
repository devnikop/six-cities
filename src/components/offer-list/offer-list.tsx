import * as React from 'react';

import {
  Offer,
  OfferPageType
} from '../../types';

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withBookmark from '../../hocs/with-bookmark/with-bookmark';

import OfferCard from '../offer-card/offer-card';

const OfferCardWrapped = withActiveItem(withBookmark(OfferCard));

interface Props {
  offers: Offer[],
  type: OfferPageType,
}

class OfferList extends React.PureComponent<Props> {
  render() {
    const {
      offers,
      type,
    } = this.props;

    return offers.map((offer, i) => <OfferCardWrapped
      key={`offer-${i}`}
      offer={offer}
      type={type}
    />
    );
  }
}

export default OfferList;
