import React from "react";
import propTypes from 'prop-types';

import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";

export const App = (props) => {
  const {
    offers,
    onCardClick,
    leaflet,
  } = props;

  return <WelcomeScreen
    offers={offers}
    onCardClick={onCardClick}
    leaflet={leaflet}
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
  onCardClick: propTypes.func,
  leaflet: propTypes.object.isRequired,
};
