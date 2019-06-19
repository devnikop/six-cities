import React from 'react';
import renderer from 'react-test-renderer';

import SignIn from './sign-in.jsx';

it(`SignIn should correctly renders`, () => {
  const tree = renderer
    .create(<SignIn
      handlerEmailChange={jest.fn()}
      handlerFormSubmit={jest.fn()}
      handlerPasswordChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
