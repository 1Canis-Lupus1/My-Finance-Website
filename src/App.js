import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  TeamOutlined,
  UserSwitchOutlined,
  HomeOutlined,
  MessageOutlined,
  StarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import PersonalLoans from "./components/PersonalLoans";
import FourWheelerLoans from "./components/FourWheelerLoans";
import TwoWheelerLoans from "./components/TwoWheelerLoans";
import Shubham from "./components/Shubham";
import Saif from "./components/Saif";
import MyLogo from "./assets/MyLogo.jpeg";
import Reviews from "./components/Reviews";
import Resources from "./components/Resources";

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div>
              <img
                src={MyLogo}
                alt="logo"
                style={{ height: "5vh", width: "4wh", margin: "20px 15px" }}
              />
            </div>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item
                key="1"
                icon={<HomeOutlined style={{ fontSize: "20px" }} />}
              >
                <b>Home</b>
                <Link to="/" />
              </Menu.Item>
              <SubMenu
                key="sub1"
                icon={<UserSwitchOutlined style={{ fontSize: "20px" }} />}
                title="Loans"
              >
                <Menu.Item key="3">
                  <b>Personal Loans</b>
                  <Link to="/personal-loans" />
                </Menu.Item>
                <Menu.Item key="4">
                  <b>Two-Wheeler Loans</b>
                  <Link to="/two-wheeler-loans" />
                </Menu.Item>
                <Menu.Item key="5">
                  <b>Four-Wheeler Loans</b>
                  <Link to="/four-wheeler-loans" />
                </Menu.Item>
              </SubMenu>
              <Menu.Item
                key="9"
                icon={<MessageOutlined style={{ fontSize: "20px" }} />}
              >
                <b>Contact Us</b>
                <Link to="/contact-us" />
              </Menu.Item>
              <Menu.Item
                key="10"
                icon={<StarOutlined style={{ fontSize: "20px" }} />}
              >
                <b>Reviews</b>
                <Link to="/reviews" />
              </Menu.Item>

              <SubMenu
                key="sub2"
                icon={<TeamOutlined style={{ fontSize: "20px" }} />}
                title="Testimonials"
              >
                <Menu.Item key="6">
                  Shubham Choudhary
                  <Link to="/shubham" />
                </Menu.Item>
                <Menu.Item key="8">
                  Saif Khan
                  <Link to="/saif" />
                </Menu.Item>
              </SubMenu>
              <Menu.Item
                key="11"
                icon={<SettingOutlined style={{ fontSize: "20px" }} />}
              >
                <b>Resources</b>
                <Link to="/how-its-done" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Route exact path="/" component={Home} />
                <Route path="/personal-loans" component={PersonalLoans} />
                <Route path="/two-wheeler-loans" component={TwoWheelerLoans} />
                <Route
                  path="/four-wheeler-loans"
                  component={FourWheelerLoans}
                />
                <Route path="/about" component={About} />
                <Route path="/shubham" component={Shubham} />
                <Route path="/saif" component={Saif} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/how-its-done" component={Resources} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
