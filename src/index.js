import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

import "./styles/index.scss";
import Test from "./components/Test";
import Layout from "components/Layout";

const Index = () => {
  return <div class="name__hi">Hello Rea!</div>;
};

ReactDOM.render(<Layout />, document.getElementById("index"));
