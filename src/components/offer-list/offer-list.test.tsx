import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import { offersArrayMock } from '../../mocks/mocksForTests';
import { OfferPageType } from '../../types';

import OfferList from './offer-list';

const mockStore = configureMockStore;
const store = mockStore({});

it.skip(`OfferList correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <MemoryRouter>
        <OfferList
          offers={offersArrayMock}
          type={OfferPageType.MAIN}
        />
      </MemoryRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
