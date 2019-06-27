import * as React from "react";

interface Props {
  renderScreen: () => void,
}

class App extends React.PureComponent<Props> {
  render() {
    const {
      renderScreen,
    } = this.props;

    return <>
      {renderScreen()}
    </>;
  }
}

export { App };

export default App;
