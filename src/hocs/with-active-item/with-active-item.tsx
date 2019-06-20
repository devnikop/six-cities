import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectedProps {
  activeItem: number,
  changeActiveItem: (item: number) => void,
}

interface State {
  activeItem: number,
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: -1,
      };

      this._changeActiveItem = this._changeActiveItem.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeItem={this.state.activeItem}
        changeActiveItem={this._changeActiveItem}
      />;
    }

    _changeActiveItem(item) {
      this.setState({
        activeItem: item,
      });
    }
  }
  return WithActiveItem;
};

export default withActiveItem;
