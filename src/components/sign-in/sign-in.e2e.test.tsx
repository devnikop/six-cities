import { shallow } from 'enzyme';
import * as React from 'react';

import SignIn from './sign-in';

it(`Change on login input calls callback`, () => {
  const handlerEmailChange = jest.fn();

  const screen = shallow(<SignIn
    onEmailChange={handlerEmailChange}
    onFormSubmit={jest.fn()}
    onPasswordChange={jest.fn()}
  />);

  const loginInputElement = screen.find(`input[type="email"]`);
  loginInputElement.simulate(`change`);

  expect(handlerEmailChange).toHaveBeenCalled();
});

it(`Change on password input calls callback`, () => {
  const handlerPasswordChange = jest.fn();

  const screen = shallow(<SignIn
    onEmailChange={jest.fn()}
    onFormSubmit={jest.fn()}
    onPasswordChange={handlerPasswordChange}
  />);

  const passwordInputElement = screen.find(`input[type="password"]`);
  passwordInputElement.simulate(`change`);

  expect(handlerPasswordChange).toHaveBeenCalled();
});

it(`Submit form calls callback`, () => {
  const handlerFormSubmit = jest.fn();

  const screen = shallow(<SignIn
    onEmailChange={jest.fn()}
    onFormSubmit={handlerFormSubmit}
    onPasswordChange={jest.fn()}
  />);

  const formElement = screen.find(`.login__form`);
  formElement.simulate(`submit`);

  expect(handlerFormSubmit).toHaveBeenCalled();
});
