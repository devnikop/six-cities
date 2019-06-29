import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Subtract } from 'utility-types';
import * as React from 'react';

import { ActionCreator } from '../../reducer/data/data';

interface InjectedProps {
  activeItem: number,
  changeActiveItem: (item: number) => void,
  changeCurrentOffer: (id: number) => void,
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithActiveItem extends React.PureComponent<T> {
    constructor(props) {
      super(props);

      this._changeActiveItem = this._changeActiveItem.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        changeActiveItem={this._changeActiveItem}
      />;
    }

    _changeActiveItem(id) {
      this.props.changeCurrentOffer(id);
    }
  }
  return WithActiveItem;
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentOffer: (id) => {
    dispatch(ActionCreator.changeActiveOfferId(id));
  }
});

export default compose(
  connect(null, mapDispatchToProps),
  withActiveItem,
);
