import * as React from 'react';

import {Offer} from '../../types';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withBookmark from '../../hocs/with-bookmark/with-bookmark';

import OfferCard from '../offer-card/offer-card';

const OfferCardWrapped = withActiveItem(withBookmark(OfferCard));

interface Props {
  offers: Offer[],
}

class OfferList extends React.PureComponent<Props> {
  render() {
    const {
      offers
    } = this.props;

    return offers.map((offer, i) => <OfferCardWrapped
      key={`offer-${i}`}
      offer={offer}
    />
    );
  }
}

export default OfferList;
