import React from "react";
import { Layout as LayoutWrapper, Menu, Breadcrumb, Icon } from "antd";
import { Route, Link } from "react-router-dom";

import { MENU } from "constants/constants";
import { ROUTES } from "constants/constants";

const { Header, Content, Footer, Sider } = LayoutWrapper;
const SubMenu = Menu.SubMenu;

export default class Layout extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <LayoutWrapper style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>
                <Link to="/home">{MENU.HOME}</Link>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>
                <Link to="/settings">{MENU.SETTINGS}</Link>
              </span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>FEATURES</span>
                </span>
              }>
              <Menu.Item key="3">
                <Link to="/features/weather">{MENU.FEATURES.WEATHER}</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <LayoutWrapper>
          <Content style={{ margin: "0 16px" }}>
            {ROUTES.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </LayoutWrapper>
      </LayoutWrapper>
    );
  }
}
