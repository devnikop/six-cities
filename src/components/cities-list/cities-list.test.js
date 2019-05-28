import React from 'react';
import renderer from 'react-test-renderer';

import {CitiesList} from './cities-list.jsx';
import {citiesMock} from '../../mocks/mocksForTests.js';


it(`CitiesList correctly renders`, () => {

  const tree = renderer
    .create(<CitiesList
      cities={citiesMock.map((it) => it.name)}
      currentCity={citiesMock[0].name}
      onCity={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

