import React from "react";
import ReactDOM from "react-dom";

import {App} from './components/app/app.jsx';

const init = () => {
  const settings = {
    placeCardNames: [
      `Beautiful &amp; luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
    ],
    onCardNameClick: () => {},
  };

  ReactDOM.render(
      <App
        placeCardNames={settings.placeCardNames}
        onCardNameClick={settings.onCardNameClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
