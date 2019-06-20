import {compose} from 'recompose';
import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import {getUserData} from '../../reducer/user/selectors';
import {ActionCreator} from '../../reducer/user/user';


const withHeader = (Component) => {
  class WithHeader extends React.PureComponent {
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

  WithHeader.propTypes = {
    requireAuthorization: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

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
