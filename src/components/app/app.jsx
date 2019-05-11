import React from "react";
import propTypes from 'prop-types';

import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";

export const App = (props) => {
  const {placeCardNames, onCardNameClick} = props;

  return <WelcomeScreen
    placeCardNames={placeCardNames}
    onCardNameClick={onCardNameClick}
  />;
};

App.propTypes = {
  placeCardNames: propTypes.arrayOf(propTypes.string),
  onCardNameClick: propTypes.func,
};
