import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {offerMock} from '../../mocks/mocksForTests';
import OfferCard from './offer-card';

it(`OfferCard renders correctly`, () => {
  const offer = offerMock;

  const tree = renderer
    .create(<OfferCard
      active={0}
      offer={offer}
      onCardClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
