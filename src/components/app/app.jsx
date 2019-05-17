import React from "react";
import propTypes from 'prop-types';

import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";

export const App = (props) => {
  const {offers, onCardNameClick} = props;

  return <WelcomeScreen
    offers={offers}
    onCardNameClick={onCardNameClick}
  />;
};

App.propTypes = {
  offers: propTypes.arrayOf(
      propTypes.shape({
        placeName: propTypes.string.isRequired,
        placeType: propTypes.oneOf([`Apartment`, `Private room`]),
        isPremium: propTypes.bool,
        src: propTypes.string,
        price: propTypes.number,
      })
  ),
  onCardNameClick: propTypes.func,
};
