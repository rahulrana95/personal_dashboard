import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import domless from "./domless/index";
import "antd/dist/antd.css";

window.domless = domless;

import "./styles/index.scss";
import Test from "./components/Test";
import Layout from "components/Layout";

const Index = () => {
  return <div class="name__hi">Hello Rea!</div>;
};

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById("index")
);
