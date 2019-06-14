import {compose} from 'recompose';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import withAuthorization from '../with-authorization/with-authorization';
import withHeader from '../with-header/with-header';

import SignIn from '../../components/sign-in/sign-in.jsx';
import MainHeader from '../../components/main-header/main-header.jsx';
import MainPage from "../../components/main-page/main-page.jsx";

const MainHeaderWrapped = withHeader(MainHeader);
const SignInWrapped = withAuthorization(SignIn);

const withChangeScreen = (Component) => {
  class WithChangeScreen extends React.PureComponent {
    constructor(props) {
      super(props);

      this._getScreen = this._getScreen.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        renderScreen={this._getScreen}
      />;
    }

    _getScreen() {
      const {
        isAuthorizationRequired,
        leaflet
      } = this.props;


      if (isAuthorizationRequired) {
        return <>
          <MainHeaderWrapped/>
          <SignInWrapped/>
        </>;
      } else {
        return <>
          <MainHeaderWrapped/>
          <MainPage
            leaflet={leaflet}
          />
        </>;
      }
    }
  }

  WithChangeScreen.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
    leaflet: PropTypes.object.isRequired,
  };

  return WithChangeScreen;
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    isAuthorizationRequired: getAuthorizationStatus(state),
  });

export default compose(
    connect(
        mapStateToProps
    ),
    withChangeScreen
);
