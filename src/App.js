import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MailOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import PersonalLoans from "./components/PersonalLoans";
import FourWheelerLoans from "./components/FourWheelerLoans";
import TwoWheelerLoans from "./components/TwoWheelerLoans";
import Shubham from "./components/Shubham";
import Saif from "./components/Saif"

const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;

class App extends React.Component {
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
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxMy7QOxBGPZMmke4Xfg0q_t2g2LiApp0aQ&usqp=CAU"
              className="logo"
            />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item
                key="1"
                icon={<HomeOutlined style={{ fontSize: "25px" }} />}
                style={{ fontSize: "20px" }}
              >
                <b>Home</b>
                <Link to="/" />
              </Menu.Item>
              <SubMenu
                key="sub1"
                icon={<MailOutlined style={{ fontSize: "25px" }} />}
                title="Loans"
                style={{ fontSize: "20px" }}
              >
                <Menu.Item key="5">
                  <b>Personal Loan</b>
                  <Link to="/personal-loans" />
                </Menu.Item>
                <Menu.Item key="6">
                  <b>Two-Wheeler Loan</b>
                  <Link to="/two-wheeler-loans" />
                </Menu.Item>
                <Menu.Item key="7">
                  <b>Four-Wheeler Loan</b>
                  <Link to="/four-wheeler-loans" />
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub11"
                icon={<MessageOutlined style={{ fontSize: "25px" }} />}
                title="Testimonial"
                style={{ fontSize: "20px" }}
              >
                {/* <Menu.Item key="8">
                  <b>S & S Finance</b>
                  <Link to="/about" />
                </Menu.Item> */}
                <Menu.Item key="9">
                  <b>Shubham </b>
                  <Link to="/shubham" />
                </Menu.Item>
                <Menu.Item key="10">
                  <b>Saif</b>
                  <Link to="/saif" />
                </Menu.Item>
              </SubMenu>
              <Menu.Item
                key="4"
                icon={<MailOutlined style={{ fontSize: "25px" }} />}
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
              <Route exact path="/" component={Home} />
              <Route path="/personal-loans" component={PersonalLoans} />
              <Route path="/two-wheeler-loans" component={TwoWheelerLoans} />
              <Route path="/four-wheeler-loans" component={FourWheelerLoans} />
              <Route path="/about" component={About} />
              <Route path="/shubham" component={Shubham} />
              <Route path="/saif" component={Saif} />
              <Route path="/contact-us" component={ContactUs} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
