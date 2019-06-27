import { compose } from 'recompose';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as leaflet from 'leaflet';
import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from 'redux-thunk';

import { configureAPI } from './api';

import reducer from './reducer/index';
import { Operation as DataOperation } from './reducer/data/data';
import { Operation as UserOperation } from './reducer/user/user';

import withChangeScreen from './hocs/with-change-screen/with-change-screen';

import App from './components/app/app';

const AppWrapped = withChangeScreen(App);

const init = () => {
  const api = configureAPI();

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(api)),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ ?
      (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (a) => a
    )
  );

  store.dispatch(DataOperation.loadOffers());
  store.dispatch(UserOperation.checkAuth());

  ReactDOM.render(
    <Provider store={store}>
      <AppWrapped
        leaflet={leaflet}
      />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
