import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  MessageOutlined,
  CrownOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={<HomeOutlined style={{ fontSize: "25px" }} />}
              style={{ fontSize: "20px" }}
            >
              <b>Home</b>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<CrownOutlined style={{ fontSize: "25px" }} />}
              style={{ fontSize: "20px" }}
            >
              <b>About</b>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<MessageOutlined style={{ fontSize: "25px" }} />}
              style={{ fontSize: "20px" }}
            >
              <b>Contact Us</b>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
