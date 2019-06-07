import React from 'react';
import renderer from 'react-test-renderer';

import {OfferList} from './offer-list.jsx';
import {offersArrayMock} from '../../mocks/mocksForTests';

it(`OfferList correctly renders`, () => {
  const offers = offersArrayMock;

  const tree = renderer
    .create(<OfferList
      activeItem={-1}
      offers={offers}
      changeActiveItem={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
