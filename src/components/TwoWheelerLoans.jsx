import React from "react";
import { Layout, Card, Table } from "antd";
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
    name: "Loan Processing Charges",
    money: "	Maximum - 3% of Loan Amount",
  },
  {
    key: "2",
    name: "Documentation Charges",
    money: "Maximum - 3% of Loan Amount",
  },
  {
    key: "3",
    name: "No Due Certificate / No Objection Certificate (NOC)",
    money: "NIL",
  },
  {
    key: "4",
    name: "Overdue EMI Interest",
    money: "	2.5% Per Month on the Unpaid Installment",
  },
  {
    key: "5",
    name: "Stamp Duty",
    money: "At actuals as levied by respective State Govt.",
  },
  {
    key: "6",
    name: "Cheque Bounce / EMI return charges",
    money: "Rs 500/-",
  },
  {
    key: "7",
    name:
      "Legal, Repossession & Incidental charges (Incidental charges are those expenses that are not budgeted or specified but are incurred by the bank on behalf of the customer.)",
    money: "At Actuals",
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
      <p style={{ fontSize: "15px" }}>
        <b>Flexible Repayment Tenure</b>
      </p>
      <p>
        Decide whether you'd like your loan tenure to be just 12 months, or 48
        months, with our pocket-friendly EMI repayment options.
      </p>
      <hr />
      <p style={{ fontSize: "15px" }}>
        <b>Fulfil Your Every Need</b>
      </p>
      <p>
        Get up to 100% finance in you're an HDFC Bank account holder for
        specific models, and repay the money at attractive interest rates.
      </p>
      <hr />
      <p style={{ fontSize: "15px" }}>
        <b>Online Application</b>
      </p>
      <p>
        Enjoy convenient doorstep service and skip the queues when you log a
        request online.
      </p>
      <hr />
      <p style={{ fontSize: "15px" }}>
        <b>Competitive Rates</b>
      </p>
      <p>
        We offer a lower rate of interest and Zero Processing Fees for Loan on
        Vehicles up to Rs 2.5 lakhs sourced via our branch or digital channels
        that allows you to enjoy savings of up to Rs. 2,325/-*.
      </p>
      <small>
        <i>
          *Conditions Apply. Savings calculated on loan amount of Rs. 60,000/-.
          Approval TAT from the time of submission of relevant documents at
          branch with no address change applicable for account holders. Offer is
          valid till 31st December 2020 only on select segments
        </i>
      </small>
      <hr />
      <p style={{ fontSize: "15px" }}>
        <b>Easy Repayment Schemes</b>
      </p>
      <p>
        Easily calculate your EMI and pay through ECS/Standing
        Instructions/post-dated cheques.
      </p>
    </>
  ),
  tab2: (
    <>
      <p style={{ textAlign: "left" }}>
        The following people are eligible to apply for a Two Wheeler Loan:
      </p>
      <ul>
        <li style={{ textAlign: "left" }}>
          A salaried or self-employed individual
        </li>
        <li style={{ textAlign: "left" }}>
          Individuals who are a minimum of 21 years of age at the time of
          applying for the loan, and no older than 65 at the end of the loan
          tenure
        </li>
        <li style={{ textAlign: "left" }}>
          Those who earn a minimum gross income of Rs. 84,000 per year for a
          salaried profile, and Rs. 72,000/- per year for a self-employed
          profile
        </li>
        <li style={{ textAlign: "left" }}>
          Individuals who have been residing at the given residence for a
          minimum of 1 year (in case of transfer from another location with less
          than 1 year at the current location, kindly provide relevant documents
          to the bank during loan approval stage)
        </li>
        <li style={{ textAlign: "left" }}>
          Those who have been working for a minimum of 1 year
        </li>
        <li style={{ textAlign: "left" }}>
          Individuals who have a telephone/office landline connection
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
      <ul>
        <li style={{ textAlign: "left" }}>
          A copy of any of the following identity proof documents:
        </li>
        <ul>
          <li style={{ textAlign: "left" }}>Passport</li>
          <li style={{ textAlign: "left" }}>
            Photo Credit Card (front & reverse)
          </li>
          <li style={{ textAlign: "left" }}>Voters ID Card</li>
          <li style={{ textAlign: "left" }}>Driving License</li>
          <li style={{ textAlign: "left" }}>PAN card</li>
          <li style={{ textAlign: "left" }}>
            Copy of Company ID card of MNC/Public Ltd./PSU/Govt. Company
          </li>
          <li style={{ textAlign: "left" }}>
            Ration Card (if photo is provided)
          </li>
        </ul>

        <li style={{ textAlign: "left" }}>
          A copy of any of the following documents as address proof:
          <ul>
            <li style={{ textAlign: "left" }}>
              Passport/Voter's ID Card/Driving License
            </li>
            <li style={{ textAlign: "left" }}>
              Telephone Bill /Electricity Bill/Gas Connection Bills
            </li>
            <li style={{ textAlign: "left" }}>Rental Agreement</li>
            <li style={{ textAlign: "left" }}>Property Purchase Agreement</li>
            <li style={{ textAlign: "left" }}>
              Credit Card Billing Statement (latest)
            </li>
            <li style={{ textAlign: "left" }}>LIC Policy</li>
            <li style={{ textAlign: "left" }}>
              Letter from Company or Company Provided Accomodation (List of the
              company's as per the Banks List – ID card of MNC/Public
              Ltd./PSU/Govt. Company, containing the residence address)
            </li>
          </ul>
        </li>

        <li style={{ textAlign: "left" }}>The following Income Proof:</li>
        <ul>
          <li style={{ textAlign: "left" }}>
            Salaried: Latest salary slip for Govt. employees. If Salary slip is
            not available, only salary certificate to be accepted with
            deductions.
          </li>
          <li style={{ textAlign: "left" }}>
            For Self Employed: Copy of the latest Income Tax Return
          </li>
        </ul>
      </ul>
    </>
  ),
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
                <h1 style={{ fontSize: "25px",backgroundColor:"orange" }}>Two-Wheeler Loans</h1>
                <Card
                  style={{ width: "100%" }}
                  // title="Two-Wheeler Loans"
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
