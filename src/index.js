import React from "react";
import ReactDOM from "react-dom";
import leaflet from 'leaflet';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';
import {reducer} from './reducer';

const init = () => {
  const store = createStore(reducer);

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
