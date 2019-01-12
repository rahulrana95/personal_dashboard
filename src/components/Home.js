import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import ComponentHeader from "./ComponentHeader";

class Home extends Component {
  render() {
    return (
      <div className="">
        <ComponentHeader>
          <span>Home</span>
        </ComponentHeader>
        <div className="c-body">
          <p>Align Center</p>
          <Row type="flex" justify="space-between" align="top">
            <Col span={5}>
              <Card
                title="Default size card"
                extra={<a href="#">More</a>}
                style={{ width: 250, height: "auto" }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={5}>
              <Card
                title="Default size card"
                extra={<a href="#">More</a>}
                style={{ width: 250, height: "auto" }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="Default size card"
                extra={<a href="#">More</a>}
                style={{ width: 250, height: "auto" }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
