import React from 'react';
import renderer from 'react-test-renderer';
import {WelcomeScreen} from './welcome-screen.jsx';

it(`Welcome-screen correctly renders`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      placeCardNames={[``, ``]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
