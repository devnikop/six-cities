import { MemoryRouter } from 'react-router-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { loginDataMock } from '../../mocks/mocksForTests';

import MainHeader from './main-header';

it(`MainHeader correctly renders`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <MainHeader
        user={loginDataMock}
      />
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
