import React, { Component } from "react";

class ComponentHeader extends Component {
  render() {
    return <div className="component-header">{this.props.children}</div>;
  }
}

export default ComponentHeader;
