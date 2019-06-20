import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {OfferList} from './offer-list';
import {offersArrayMock} from '../../mocks/mocksForTests';

it(`OfferList correctly renders`, () => {
  const offers = offersArrayMock;

  const tree = renderer
    .create(<OfferList
      activeItem={-1}
      changeActiveItem={jest.fn()}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
