import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import leaflet from 'leaflet';
import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import {configureAPI} from './api';
import {reducer, Operation} from './reducer';
import App from './components/app/app.jsx';

const init = () => {
  const api = configureAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

  store.dispatch(Operation.loadOffers());

  ReactDOM.render(
      <Provider store={store}>
        <App
          leaflet={leaflet}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
