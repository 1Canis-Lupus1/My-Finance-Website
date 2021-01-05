import React from "react";
import { Layout, Card, Button, Table } from "antd";
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

const columns = [
  {
    title: "Fee Description",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Charges To Be Paid",
    className: "column-money",
    dataIndex: "money",
    align: "right",
  },
];

const data = [
  {
    key: "1",
    name: "Rack interest rate",
    money: "Salaried - 10.75% to 21.30%",
  },
  {
    key: "2",
    name: "Loan processing charges",
    money:
      "Up to 2.50% of the loan amount subject to a minimum of ₹ 2,999/- & maximum of ₹ 25,000/- for salaried customers",
  },
  {
    key: "3",
    name: "Prepayment in Part or full",
    money:
      "Salaried- No pre-payment in part or full permitted until repayment of 12 EMIs",
  },
  {
    key: "4",
    name: "Pre-payment charges",
    money: "Salaried- 13-24 months - 4% of principal outstanding,",
  },
  {
    key: "5",
    name: "Loan closure letter",
    money: "NIL",
  },
  {
    key: "6",
    name: "Overdue EMI interest",
    money: "2% per month on EMI / principal overdue",
  },
  {
    key: "7",
    name: "Stamp duty & other statutory charges",
    money: "As per applicable laws of the state",
  },
  {
    key: "8",
    name: "Loan cancellation charges",
    money:
      "NIL (However client would be charged interest for the interim period between date of loan disbursement and loan cancellation and processing fees would be retained.)",
  },
];

const contentList = {
  tab1: (
    <>
      <p style={{ fontSize: "20px" }}>
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
      <p style={{ fontSize: "20px" }}>
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
      <small>
        *Terms and conditions of the insurers shall apply. The policy is offered
        by S&S Financial Services Pvt Ltd.
      </small>
      <hr />
      <p style={{ fontSize: "20px" }}>
        <b>Apply online for a Personal Loan</b>
      </p>
      <p style={{ fontSize: "15px" }}>
        We have simplified the personal loan application process. You can make
        an <u>online personal loan application</u> in just a few clicks
      </p>
      <a href="#" target="_blank">
        <Button>Apply Now</Button>
      </a>
    </>
  ),
  tab2: (
    <>
      <p>
        <b>Criteria</b>
      </p>
      <p style={{ textAlign: "left" }}>The following people are eligible to apply for a Personal Loan:</p>
      <ul>
        <li style={{ textAlign: "left" }}>
          Employees of select private limited companies, employees from public
          sector undertakings, including central, state and local bodies
        </li>
        <li style={{ textAlign: "left" }}>
          Individuals between 21 and 60 years of age
        </li>
        <li style={{ textAlign: "left" }}>
          Individuals who have had a job for at least 2 years, with a minimum of
          1 year with the current employer
        </li>
        <li style={{ textAlign: "left" }}>
          <b>
            <u>S&S Financial Services Bank Salary account:</u>
          </b>{" "}
          Customer who earn a minimum of ₹ 25,000 net income per month
          <br />
          <b>
            <u>NON S&S Financial Services Bank Salary account Holder:</u>
          </b>{" "}
          Minimum of ₹ 50,000 net income per month
        </li>
      </ul>
    </>
  ),
  tab3: (
    <>
      <p>
        Enclosed below are S&S Financial Services Personal Loan Interest Rates &
        Charges:
      </p>
      <Table columns={columns} dataSource={data} scroll={{ y: 240 }} />
    </>
  ),
  tab4: (
    <>
      <p>
        <b>Documents Required</b>
      </p>
      <ul>
        <li style={{ textAlign: "left" }}>
          Identity proof (copy of passport/voter ID card/driving
          license/Aadhaar)
        </li>
        <li style={{ textAlign: "left" }}>
          Address proof (copy of passport/voter ID card/driving license/Aadhaar)
        </li>
        <li style={{ textAlign: "left" }}>
          Bank statement of previous 3 months (Passbook of previous 6 months)
        </li>
        <li style={{ textAlign: "left" }}>
          Two latest salary slip/current dated salary certificate with the
          latest Form 16
        </li>
        <li style={{ textAlign: "left" }}>Proof of End use</li>
      </ul>
    </>
  ),
};

class PersonalLoans extends React.Component {
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
                <h1 style={{ fontSize: "35px" }}>Customised Personal Loans</h1>
                <Card
                  style={{ width: "100%" }}
                  //   title="Customised Personal Loans"
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

export default PersonalLoans;
