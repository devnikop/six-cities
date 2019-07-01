import * as React from 'react';
import * as renderer from 'react-test-renderer';

import SignIn from './sign-in';

it(`SignIn should correctly renders`, () => {
  const tree = renderer
    .create(<SignIn
      onEmailChange={jest.fn()}
      onFormSubmit={jest.fn()}
      onPasswordChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
