import { Drawer, Button } from "antd";
import React, { Component } from "react";

export default class DrawerWrapper extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.actionableItem}
        <Drawer
          title={this.props.title}
          placement="right"
          closable={false}
          onClose={this.props.onClose}
          visible={this.props.isVisible}>
          {this.props.content}
        </Drawer>
      </div>
    );
  }
}
