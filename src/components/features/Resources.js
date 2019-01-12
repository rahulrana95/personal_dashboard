import React, { Component } from "react";
import ComponentHeader from "../ComponentHeader";
import { List, Avatar, Icon, Row, Button } from "antd";
import Drawer from "components/features/Drawer";
import AddResourceForm from "components/features/AddResourcesForm";
import rData from "../../domless/resources.json";

class Resources extends Component {
  constructor() {
    super();
    this.state = {
      addResourceFormIsVisible: false
    };
  }
  render() {
    const { resources } = this.props;
    console.log(this.state);
    return (
      <div className="component-container">
        <ComponentHeader>Resources</ComponentHeader>
        <div className="c-body">
          <Row>
            <Drawer
              actionableItem={<Button onClick={this.onAddBtnClick}>Add</Button>}
              title="Add New Resource"
              onClose={this.OnCloseAddResourceForm}
              isVisible={this.state.addResourceFormIsVisible}
              content={<AddResourceForm />}
            />
          </Row>

          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 10
            }}
            dataSource={resources}
            renderItem={item => (
              <List.Item
                key={item.title}
                extra={
                  <img
                    width={150}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }>
                <List.Item.Meta
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description /**sumary here */}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }

  OnCloseAddResourceForm = () => {
    this.setState({
      addResourceFormIsVisible: false
    });
  };

  onAddBtnClick = () => {
    this.setState({
      addResourceFormIsVisible: true
    });
  };
}

const listData = [];
for (let i = 0; i < 2; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    categories: [""],
    type: [],
    isAlreadyReaded: false
  });
}

Resources.defaultProps = {
  resources: rData
};

export default Resources;
