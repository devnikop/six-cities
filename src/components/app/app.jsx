import PropTypes from 'prop-types';
import React from "react";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

class App extends React.PureComponent {
  render() {
    const {
      leaflet,
    } = this.props;

    return <WelcomeScreen
      leaflet={leaflet}
    />;
  }
}

App.propTypes = {
  leaflet: PropTypes.object.isRequired,
};

export {App};

export default App;
