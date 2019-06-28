import {compose} from 'recompose';
import {connect} from 'react-redux';
import * as React from 'react';
import {Subtract} from 'utility-types';

import {configureAPI} from '../../api';
import {ActionCreator} from '../../reducer/user/user';
import history from '../../history';

import {adaptLoginResponse} from '../../adapter';

interface InjectedProps {
  handlerEmailChange: React.ChangeEventHandler<HTMLInputElement>,
  handlerFormSubmit: React.FormEventHandler<HTMLFormElement>,
  handlerPasswordChange: React.ChangeEventHandler<HTMLInputElement>,
  onFormSubmit: (formData: React.ComponentState) => void,
}

interface State {
  email: string,
  password: string,
}

const withAuthorization = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithAuthorization extends React.PureComponent<T, State> {
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
          history.push(`/`);
        }
      });
  }
});

export default compose(
    connect(null, mapDispatchToProps),
    withAuthorization
);
