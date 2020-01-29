import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import domless from "./domless/index";
import "./styles/index.scss";
import Layout from "components/Layout";

window.domless = domless;

ReactDOM.render(
  <Router>
    <Layout/>
  </Router>,
  document.getElementById("index")
);
