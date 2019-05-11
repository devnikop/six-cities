import React from "react";
import propTypes from 'prop-types';

import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";

export const App = (props) => {
  const {placeCardNames} = props;

  return <WelcomeScreen
    placeCardNames={placeCardNames}
  />;
};

App.propTypes = {
  placeCardNames: propTypes.arrayOf(propTypes.string),
};
