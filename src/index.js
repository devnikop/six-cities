import {createStore} from 'redux';
import {Provider} from 'react-redux';
import leaflet from 'leaflet';
import React from "react";
import ReactDOM from "react-dom";

import {reducer} from './reducer';
import App from './components/app/app.jsx';

const init = () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
