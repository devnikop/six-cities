import {Redirect} from 'react-router-dom';
import React from 'react';

const withPrivateRoute = (Component, data) => {
  class WithPrivateRoute extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      if (!Object.keys(data).length) {
        return <Redirect to="/login" />;
      }

      return Component;
    }

  }

  return WithPrivateRoute;
};

export default withPrivateRoute;
