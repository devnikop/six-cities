import PropTypes from 'prop-types';
import React from "react";

class App extends React.PureComponent {
  render() {
    const {
      renderScreen,
    } = this.props;

    return <>
        {renderScreen()}
    </>;
  }
}

App.propTypes = {
  renderScreen: PropTypes.func.isRequired,
};

export {App};

export default App;
