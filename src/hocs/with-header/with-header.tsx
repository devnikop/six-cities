import {compose} from 'recompose';
import {connect} from 'react-redux';
import * as React from 'react';
import {Subtract} from 'utility-types';

import {getUserData} from '../../reducer/user/selectors';
import {ActionCreator} from '../../reducer/user/user';

import {User} from '../../types';

interface InjectedProps {
  requireAuthorization: () => void,
  user: User,
}

const withHeader = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithHeader extends React.PureComponent<T> {
    constructor(props) {
      super(props);

      this._handlerSignInClick = this._handlerSignInClick.bind(this);
    }

    render() {
      const {
        user
      } = this.props;

      return <Component
        {...this.props}
        handlerSignInClick={this._handlerSignInClick}
        user={user}
      />;
    }

    _handlerSignInClick(evt) {
      evt.preventDefault();

      this.props.requireAuthorization();
    }
  }

  return WithHeader;
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    user: getUserData(state),
  });

const mapDispatchToProps = (dispatch) => ({
  requireAuthorization: () => {
    dispatch(ActionCreator.requiredAuthorization(true));
  },
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHeader
);
