import { mount } from 'enzyme';
import * as React from 'react';

import SortingOptions from './sorting-options';

it(`Change on select calls callback`, () => {
  const changeHandler = jest.fn();

  const wrapper = mount(<SortingOptions
    handleSelectChange={changeHandler}
  />);

  const cardImageElement = wrapper.find(`.places__sorting-type`).at(0);
  cardImageElement.simulate(`change`);

  expect(changeHandler).toHaveBeenCalled;
});
