import React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
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
