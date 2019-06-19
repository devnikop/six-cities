import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import MainHeader from './main-header.jsx';
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
