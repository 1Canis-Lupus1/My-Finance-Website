import React from "react";
import { Layout, Card, Button } from "antd";
import MyFooter from "./Footer";

const { Content, Footer, Sider } = Layout;

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
  tab1: (
    <>
      <p style={{fontSize:"20px"}}>
        <b>Get a personal loan in quick time</b>
      </p>
      <ul>
        <li style={{ textAlign: "left" }}>
          Check eligibility in one minute online
        </li>
        <li style={{ textAlign: "left" }}>
          Get funds in 10 seconds if you are a pre-approved{" "}
          <b>S&S Financial Services</b> customer. Other customers can get a loan
          in under 4 hours
        </li>
        <li style={{ textAlign: "left" }}>
          Get loan amount in just one working day of document submission
        </li>
      </ul>
      <hr />
      <p style={{fontSize:"20px"}}>
        <b>Apply online for a Personal Loan</b>
      </p>
      <p style={{fontSize:"15px"}}>
        We have simplified the personal loan application process. You can make
        an <u>online personal loan application</u> in just a few clicks
      </p>
      <a href="#" target="_blank"><Button>Apply Now</Button></a>
      <hr />
      <p style={{fontSize:"20px"}}>
        <b>Protect yourself with insurance</b>
      </p>
      <ul>
        <li style={{ textAlign: "left" }}>
          <b>Personal Accident Cover:</b> For a nominal premium* you can avail
          of Personal Accident cover of up to ₹ 8 Lakhs, and Critical Illness
          cover of up to ₹ 1 Lakh. The premium for these policies will be
          deducted from the loan amount during disbursal. Applicable taxes and
          surcharge/cess will be charged extra.
        </li>
        <li style={{ textAlign: "left" }}>
          <b>Personal Loan Security:</b> Secure your personal loan with Sarv
          Suraksha Pro. Key benefits include:
          <ul>
            <li style={{ textAlign: "left" }}>
              Credit Shield Cover equal to the outstanding loan amount
            </li>
            <li style={{ textAlign: "left" }}>
              Accidental Hospitalisation cover of up to ₹ 8 Lakhs*
            </li>
            <li style={{ textAlign: "left" }}>
              Accidental Death/Permanent Disablement cover of up to ₹ 1 Lakh*
            </li>
          </ul>
        </li>
      </ul>
      <small>*Terms and conditions of the insurers shall apply. The policy is offered by S&S Financial Services Pvt Ltd.</small>
    </>
  ),
  tab2: <p>Eligibility</p>,
  tab3: <p>Interest</p>,
  tab4: <p>Documenatation</p>,
};

class FourWheelerLoans extends React.Component {
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
                  title="Four-Wheeler Loans"
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

export default FourWheelerLoans;
