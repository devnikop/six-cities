import { Redirect } from 'react-router-dom';
import * as React from 'react';

import { isAuthorized } from '../../utilities';

const withPrivateRoute = (Component, authorizationData) => {
  class WithPrivateRoute extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      if (!isAuthorized(authorizationData)) {
        return <Redirect to="/login" />;
      }
      return <Component
        {...this.props}
      />;
    }
  }

  return WithPrivateRoute;
};

export default withPrivateRoute;
