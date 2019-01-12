import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import domless from "./domless/index";
import "antd/dist/antd.css";
import "./styles/index.scss";
import Layout from "components/Layout";

window.domless = domless;

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById("index")
);
