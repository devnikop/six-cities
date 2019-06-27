import { shallow } from 'enzyme';
import * as React from 'react';

import SignIn from './sign-in';

it(`Change on login input calls callback`, () => {
  const handlerEmailChange = jest.fn();

  const screen = shallow(<SignIn
    handlerEmailChange={handlerEmailChange}
    handlerFormSubmit={jest.fn()}
    handlerPasswordChange={jest.fn()}
  />);

  const loginInputElement = screen.find(`input[type="email"]`);
  loginInputElement.simulate(`change`);

  expect(handlerEmailChange).toHaveBeenCalled();
});

it(`Change on password input calls callback`, () => {
  const handlerPasswordChange = jest.fn();

  const screen = shallow(<SignIn
    handlerEmailChange={jest.fn()}
    handlerFormSubmit={jest.fn()}
    handlerPasswordChange={handlerPasswordChange}
  />);

  const passwordInputElement = screen.find(`input[type="password"]`);
  passwordInputElement.simulate(`change`);

  expect(handlerPasswordChange).toHaveBeenCalled();
});

it(`Submit form calls callback`, () => {
  const handlerFormSubmit = jest.fn();

  const screen = shallow(<SignIn
    handlerEmailChange={jest.fn()}
    handlerFormSubmit={handlerFormSubmit}
    handlerPasswordChange={jest.fn()}
  />);

  const formElement = screen.find(`.login__form`);
  formElement.simulate(`submit`);

  expect(handlerFormSubmit).toHaveBeenCalled();
});
