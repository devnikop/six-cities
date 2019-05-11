import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`Welcome-screen correctly renders`, () => {
  const tree = renderer
    .create(<App
      placeCardNames={[``, ``]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
