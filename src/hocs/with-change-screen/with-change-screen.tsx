import {compose} from 'recompose';
import {connect} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import {Subtract} from 'utility-types';
import * as React from 'react';

import {
  // getAuthorizationStatus,
  getUserData} from '../../reducer/user/selectors';
import history from '../../history';
import withAuthorization from '../with-authorization/with-authorization';
import withHeader from '../with-header/with-header';
import withPrivateRoute from '../with-private-route/with-private-route';

import {User} from '../../types';

import Favorites from '../../components/favorites/favorites';
import MainHeader from '../../components/main-header/main-header';
import MainPage from "../../components/main-page/main-page";
import OfferCardPage from '../../components/offer-card-page/offer-card-page';
import SignIn from '../../components/sign-in/sign-in';

interface InjectedProps {
  user: User,
  leaflet,
}

const MainHeaderWrapped = withHeader(MainHeader);
const SignInWrapped = withAuthorization(SignIn);

const withChangeScreen = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>

  class WithChangeScreen extends React.PureComponent<T> {
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
          <Route path="/offer" render={() =>
            <>
              <MainHeaderWrapped/>
              <OfferCardPage/>
            </>}
          />

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
