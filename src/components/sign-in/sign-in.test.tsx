import * as React from 'react';
import * as renderer from 'react-test-renderer';

import SignIn from './sign-in';

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
