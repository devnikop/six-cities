import {compose} from 'recompose';
import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import {configureAPI} from '../../api';
import {ActionCreator} from '../../reducer/user/user';

import {adaptLoginResponse} from '../../adapter';

const withAuthorization = (Component) => {
  class WithAuthorization extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this._handlerEmailChange = this._handlerEmailChange.bind(this);
      this._handlerFormSubmit = this._handlerFormSubmit.bind(this);
      this._handlerPasswordChange = this._handlerPasswordChange.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        handlerEmailChange={this._handlerEmailChange}
        handlerFormSubmit={this._handlerFormSubmit}
        handlerPasswordChange={this._handlerPasswordChange}
      />;
    }

    _handlerEmailChange(evt) {
      this.setState({
        email: evt.target.value
      });
    }

    _handlerFormSubmit(evt) {
      evt.preventDefault();
      this.props.onFormSubmit(this.state);
    }

    _handlerPasswordChange(evt) {
      this.setState({
        password: evt.target.value
      });
    }
  }

  WithAuthorization.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  return WithAuthorization;
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (formData) => {
    configureAPI(dispatch)
      .post(`/login`, formData)
      .then((response) => {
        return adaptLoginResponse(response.data);
      })
      .then((data) => {
        if (data) {
          dispatch(ActionCreator.login(data));
          dispatch(ActionCreator.requiredAuthorization(false));
        }
      });
  }
});

export default compose(
    connect(null, mapDispatchToProps),
    withAuthorization
);
