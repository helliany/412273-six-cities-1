import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  return class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };

      this._handleActiveItem = this._handleActiveItem.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeItem={this.state.activeItem}
        onActiveItemChange={this._handleActiveItem}
      />;
    }

    _handleActiveItem(activeItem) {
      this.setState({activeItem});
    }
  };
};

export default withActiveItem;
