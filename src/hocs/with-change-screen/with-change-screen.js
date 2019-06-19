import {Router, Switch, Route} from 'react-router-dom';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import {
  // getAuthorizationStatus,
  getUserData} from '../../reducer/user/selectors.js';
import withAuthorization from '../with-authorization/with-authorization';
import withHeader from '../with-header/with-header';
import history from '../../history';
import withPrivateRoute from '../with-private-route/with-private-route';

import SignIn from '../../components/sign-in/sign-in.jsx';
import MainHeader from '../../components/main-header/main-header.jsx';
import MainPage from "../../components/main-page/main-page.jsx";
import Favorites from '../../components/favorites/favorites.jsx';

const MainHeaderWrapped = withHeader(MainHeader);
const SignInWrapped = withAuthorization(SignIn);

const withChangeScreen = (Component) => {
  class WithChangeScreen extends React.PureComponent {
    constructor(props) {
      super(props);

      this._getScreen = this._getScreen.bind(this);
    }

    render() {
      const {
        user
      } = this.props;

      return <Router history={history}>
        <Switch>
          <Route path="/" exact render={() =>
            <Component
              {...this.props}
              renderScreen={this._getScreen}
            />}
          />
          <Route path="/login" render={() =>
            <>
              <MainHeaderWrapped/>
              <SignInWrapped/>
            </>}
          />
          {/* Didn't checked code */}
          <Route path="/favorites" render={() => {
            const WrappedFavorites = withPrivateRoute(Favorites, user);
            return <>
              <MainHeaderWrapped/>
              <WrappedFavorites/>
            </>;
          }}/>
        </Switch>
      </Router>;
    }

    _getScreen() {
      const {
        leaflet
      } = this.props;

      return <>
        <MainHeaderWrapped/>
        <MainPage
          leaflet={leaflet}
        />
      </>;
    }
  }

  WithChangeScreen.propTypes = {
    // isAuthorizationRequired: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    leaflet: PropTypes.object.isRequired,
  };

  return WithChangeScreen;
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    // isAuthorizationRequired: getAuthorizationStatus(state),
    user: getUserData(state),
  });

export default compose(
    connect(
        mapStateToProps
    ),
    withChangeScreen
);
