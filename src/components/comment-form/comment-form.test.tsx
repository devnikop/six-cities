import * as React from 'react';
import * as renderer from 'react-test-renderer';

import CommentForm from './comment-form';

it(`CommentForm renders correctly`, () => {
  const tree = renderer
    .create(<CommentForm
      comment={``}
      onCommentChange={jest.fn()}
      onFormSubmit={jest.fn()}
      onRatingChange={jest.fn()}
      isFormDisabled={false}
      isSubmitButtonDisabled={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
