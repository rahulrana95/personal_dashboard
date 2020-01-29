import React from "react";
import { Route, Link } from "react-router-dom";

import { MENU } from "constants/constants";
import { ROUTES } from "constants/constants";
import Sidebar from "./Sidebar";

export default class Layout extends React.Component {
  state = {
    collapsed: false,
    isLoggedin: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div>
        <Sidebar/>
        <div style={{ margin: "26px 0px 0px 0px", padding: '10px', border: "1px solid green" }}>
          {ROUTES.map((route, index) => {
            return (
              <Route
                exact
                key={index}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </div>
        <div style={{ textAlign: "center",border:"1px solid red" }}>asd</div>
      </div>
    );
  }
}
