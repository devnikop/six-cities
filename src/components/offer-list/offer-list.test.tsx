import {MemoryRouter} from 'react-router';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {OfferList} from './offer-list';
import {offersArrayMock} from '../../mocks/mocksForTests';

it(`OfferList correctly renders`, () => {
  const tree = renderer
    .create(<MemoryRouter>
        <OfferList
          activeItem={-1}
          changeActiveItem={jest.fn()}
          offers={offersArrayMock}
        />
      </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
