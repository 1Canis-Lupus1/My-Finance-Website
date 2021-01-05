import React from "react";
import { Layout, Card } from "antd";
import MyFooter from "./Footer";

const { Content, Sider } = Layout;

const tabList = [
  {
    key: "tab1",
    tab: "Features",
  },
  {
    key: "tab2",
    tab: "Eligibility",
  },
  {
    key: "tab3",
    tab: "Interest And Charges",
  },
  {
    key: "tab4",
    tab: "Documentation",
  },
];

const contentList = {
  tab1: <p>Features</p>,
  tab2: <p>Eligibility</p>,
  tab3: <p>Interest</p>,
  tab4: <p>Documenatation</p>,
};

class TwoWheelerLoans extends React.Component {
  state = {
    key: "tab1",
    noTitleKey: "app",
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    return (
      <div>
        <Layout>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
          ></Sider>
          <Layout className="site-layout">
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, textAlign: "center" }}
              >
                {/* Loan Card Here */}
                <Card
                  style={{ width: "100%" }}
                  title="Two-Wheeler Loans"
                  //   extra={<a href="#">More</a>}
                  tabList={tabList}
                  activeTabKey={this.state.key}
                  onTabChange={(key) => {
                    this.onTabChange(key, "key");
                  }}
                >
                  {contentList[this.state.key]}
                </Card>
              </div>
            </Content>
            <hr />
            <MyFooter />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default TwoWheelerLoans;
