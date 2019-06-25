import {MemoryRouter} from 'react-router';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureMockStore  from 'redux-mock-store';
import {Provider} from 'react-redux';

import OfferList from './offer-list';
import {offersArrayMock} from '../../mocks/mocksForTests';

const mockStore = configureMockStore;
const store = mockStore({});

it.skip(`OfferList correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <MemoryRouter>
        <OfferList
          offers={offersArrayMock}
        />
      </MemoryRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
