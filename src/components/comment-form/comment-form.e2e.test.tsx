import { mount } from 'enzyme';
import * as React from 'react';

import CommentForm from './comment-form';

it(`Change textarea calls callback`, () => {
  const changeHandler = jest.fn();

  const wrapper = mount(<CommentForm
    comment={``}
    handleCommentChange={changeHandler}
    handleFormSubmit={jest.fn()}
    handleRatingChange={jest.fn()}
    isFormDisabled={false}
    isSubmitButtonDisabled={false}
  />);

  const cardImageElement = wrapper.find(`.reviews__textarea`).at(0);
  cardImageElement.simulate(`change`);

  expect(changeHandler).toHaveBeenCalled;
});

it(`Change textarea calls callback`, () => {
  const submitHandler = jest.fn();
  const linkPrevention = jest.fn();

  const wrapper = mount(<CommentForm
    comment={``}
    handleCommentChange={jest.fn()}
    handleFormSubmit={submitHandler}
    handleRatingChange={jest.fn()}
    isFormDisabled={false}
    isSubmitButtonDisabled={false}
  />);

  const cardImageElement = wrapper.find(`.reviews__form`).at(0);
  cardImageElement.simulate(`click`, { preventDefault: linkPrevention });

  expect(submitHandler).toHaveBeenCalled;
  expect(linkPrevention).toHaveBeenCalled;
});

it(`Change 'rating' input calls callback`, () => {
  const changeHandler = jest.fn();

  const wrapper = mount(<CommentForm
    comment={``}
    handleCommentChange={jest.fn()}
    handleFormSubmit={jest.fn()}
    handleRatingChange={changeHandler}
    isFormDisabled={false}
    isSubmitButtonDisabled={false}
  />);

  const cardImageElement = wrapper.find(`.form__rating-input`).at(0);
  cardImageElement.simulate(`change`);

  expect(changeHandler).toHaveBeenCalled;
});
