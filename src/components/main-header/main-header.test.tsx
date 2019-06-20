import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import MainHeader from './main-header';
import {userLoginMock} from '../../mocks/mocksForTests';

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
