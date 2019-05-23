import React from 'react';
import renderer from 'react-test-renderer';

import {OfferList} from './offer-list.jsx';
import {offersArrayMock} from '../../mocks/mocksForTests';

it(`OfferList correctly renders`, () => {
  const offers = offersArrayMock;

  const tree = renderer
    .create(<OfferList
      offers={offers}
      onCardNameClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
