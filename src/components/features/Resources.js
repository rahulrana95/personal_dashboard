import React, { Component } from "react";
import ComponentHeader from "../ComponentHeader";
import { List, Avatar, Icon, Row, Button, Tabs, Radio } from "antd";
import Drawer from "components/features/Drawer";
import AddResourceForm from "components/features/AddResourcesForm";
import rData from "../../domless/resources.json";

const TabPane = Tabs.TabPane;
const IconText = ({ type, text, icon, style }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8, ...style }} />
    {text}
  </span>
);

const HashTags = ({ list }) => {
  return list.map(item => {
    return <span>#{item}</span>;
  });
};

class Resources extends Component {
  constructor() {
    super();
    this.state = {
      addResourceFormIsVisible: false
    };
  }
  render() {
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
          <div>
            <Tabs
              defaultActiveKey="1"
              tabPosition="left"
              style={{ height: "auto" }}>
              <TabPane tab="Github Repos" key="1">
                {this.renderListItem()}
              </TabPane>
              <TabPane tab="Articles Written" key="2" />
              <TabPane tab="Reading Resources" key="3" />
              <TabPane tab="Code Snippets" key="4" />
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

  renderListItem = () => {
    const { resources } = this.props;

    return (
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
            actions={[
              <IconText
                type="star"
                text="Fav"
                style={{ backgroundColor: "yellow" }}
              />,
              <IconText type="delete" text="Delete" />,
              <IconText type="read" text="Read" />,
              <IconText type="read" text="Unread" />,
              <HashTags list={["javascript", "facebook"]} />
            ]}
            extra={
              <img
                width={150}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }>
            <List.Item.Meta
              title={
                <a href={item.href} target="_target">
                  {item.title}
                </a>
              }
              description={item.description /**sumary here */}>
              xs
            </List.Item.Meta>
          </List.Item>
        )}
      />
    );
  };

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
