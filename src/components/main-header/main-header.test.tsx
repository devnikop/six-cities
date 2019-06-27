import { MemoryRouter } from 'react-router-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { userLoginMock } from '../../mocks/mocksForTests';

import MainHeader from './main-header';

it(`MainHeader correctly renders`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <MainHeader
        user={userLoginMock}
      />
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
