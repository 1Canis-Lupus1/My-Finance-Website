import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  MessageOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import Home from "./Home"
import About from "./About"
import ContactUs from "./ContactUs"

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
      <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxMy7QOxBGPZMmke4Xfg0q_t2g2LiApp0aQ&usqp=CAU" className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={<HomeOutlined style={{ fontSize: "25px" }} />}
              style={{ fontSize: "20px" }}
            >
              <b>Home</b>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<CrownOutlined style={{ fontSize: "25px" }} />}
              style={{ fontSize: "20px" }}
            >
              <b>About</b>
              <Link to="/about" />
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<MessageOutlined style={{ fontSize: "25px" }} />}
              style={{ fontSize: "20px" }}
            >
              <b>Contact Us</b>
              <Link to="/contact-us" />
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
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact-us" component={ContactUs} />
          </Content>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default SiderDemo;