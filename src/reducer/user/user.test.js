import {
  userLoginMock
} from '../../mocks/mocksForTests';
import {
  ActionCreator,
  // Operation,
  // reducer,
} from './user';

describe(`Action Creators work correctly`, () => {
  it(`Login set correctly`, () => {
    expect(ActionCreator.login(userLoginMock)).toEqual({
      type: `LOGIN`,
      payload: userLoginMock,
    });
  });

  it(`City changed correctly`, () => {
    const mock = {
      status: true,
    };
    const {status} = mock;

    expect(ActionCreator.requiredAuthorization(status)).toEqual({
      type: `REQUIRED_AUTHORIZATION`,
      payload: status,
    });
  });
});
