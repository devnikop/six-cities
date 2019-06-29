import * as React from 'react';
import * as renderer from 'react-test-renderer';

import CommentForm from './comment-form';

it(`CommentForm renders correctly`, () => {
  const tree = renderer
    .create(<CommentForm
      comment={``}
      handleCommentChange={jest.fn()}
      handleFormSubmit={jest.fn()}
      handleRatingChange={jest.fn()}
      isFormDisabled={false}
      isSubmitButtonDisabled={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
