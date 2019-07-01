import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Subtract } from 'utility-types';
import * as React from 'react';

import { Operation } from '../../reducer/user/user';

interface InjectedProps {
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>,
  onFormSubmit: React.FormEventHandler<HTMLFormElement>,
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>,
  postLogin: (formData: React.ComponentState) => void,
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
        onEmailChange={this._handlerEmailChange}
        onFormSubmit={this._handlerFormSubmit}
        onPasswordChange={this._handlerPasswordChange}
      />;
    }

    _handlerEmailChange(evt) {
      this.setState({
        email: evt.target.value
      });
    }

    _handlerFormSubmit(evt) {
      evt.preventDefault();
      this.props.postLogin(this.state);
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
  postLogin: (formData) =>
    dispatch(Operation.postLogin(formData)),
});

export default compose(
  connect(null, mapDispatchToProps),
  withAuthorization
);
