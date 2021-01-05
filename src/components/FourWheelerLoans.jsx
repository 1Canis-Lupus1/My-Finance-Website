import React from "react";
import { Layout, Card, Table } from "antd";
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
      <p style={{ fontSize: "20px" }}>
        <b>
          Get the car you want, the way you want it with our Custom-fit Car
          Loans{" "}
        </b>
      </p>
      <p>
        Why not own your dream car today- the one you thought you couldn’t
        afford for at least a decade more? Our Custom-fit Car Loans come with
        exclusive features like 100% financing on select vehicles, flexible
        repayment tenure and pocket-friendly EMI so that you get the dream car
        you want, in half the time! Our unique Step-up EMI and Balloon EMI
        Schemes make it easy for you to buy your dream car at more affordable
        EMIs. This means you can get a bigger car with the EMI of a smaller car.
      </p>
      <hr />
      <p style={{ fontSize: "20px" }}>
        <b>Loan Amount</b>
      </p>
      <p>
        <ul>
          <li style={{ textAlign: "left" }}>
            Get loan up to ₹ 3 crore on a wide range of cars and multi-utility
            vehicles{" "}
          </li>
          <li style={{ textAlign: "left" }}>
            Enjoy 100% on-road finance** on your New Car Loan
          </li>
        </ul>
      </p>
      <hr />
      <p style={{ fontSize: "20px" }}>
        <b>Quick and easy Processing and Approval</b>
      </p>
      <ul>
        <li style={{ textAlign: "left" }}>
          Check your New Car Loan eligibility online or at select branches in
          just 60 seconds
        </li>
        <li style={{ textAlign: "left" }}>
          Enjoy transparent, quick and easy documentation process
        </li>
        <li style={{ textAlign: "left" }}>
          {" "}
          Get a New Car Loan approval in just 10 minutes{" "}
        </li>
      </ul>
      <small>
        (*Loan processing and disbursement will take at least 7 working days
        post submission of all required documents and information required by
        the bank)
      </small>
      <hr />
      <p style={{ fontSize: "20px" }}>
        <b>Funding on Insurance</b>
      </p>
      <p>
        We offer funding for comprehensive package insurance product which
        offers protection to individuals like Permanent Total Disability,
        Accidental Death and accidental hospitalization etc
      </p>
    </>
  ),
  tab2: (
    <>
      <p style={{ textAlign: "left" }}>
        The following people are eligible to apply for a New Car Loan:
      </p>
      <b>Salaried Individuals:</b>
      <ul>
        <li style={{ textAlign: "left" }}>
          This includes employees of private limited companies, employees from
          public sector undertakings, including central, state and local bodies
        </li>
        <li style={{ textAlign: "left" }}>
          Individuals who are a minimum of 21 years of age at the time of
          applying for the loan, and no older than 60 at the end of the loan
          tenure
        </li>
        <li style={{ textAlign: "left" }}>
          Individuals who have had a job for at least 2 years, with a minimum of
          1 year with the current employer
        </li>
        <li style={{ textAlign: "left" }}>
          Those who earn a minimum of Rs. 3,00,000 per year, including the
          income of the spouse/co-applicant
        </li>
        <li style={{ textAlign: "left" }}>
          Individuals who have a telephone/post-paid mobile
        </li>
      </ul>
      <b>Self Employed Individuals and Professionals (Sole Proprietorship):</b>
      <ul>
        <li style={{ textAlign: "left" }}>
          This includes self-employed sole proprietors in the business of
          manufacturing, trading or services
        </li>
        <li style={{ textAlign: "left" }}>
          Individuals who are a minimum of 21 years of age at the time of
          applying for the loan, and no older than 65 at the end of the loan
          tenure
        </li>
        <li style={{ textAlign: "left" }}>
          Those who have been in business for a minimum of 2 years
        </li>
        <li style={{ textAlign: "left" }}>
          Should earn at least Rs. Rs. 3,00,000 per annum
        </li>
      </ul>
      <b>Self Employed Individuals (Public Limited Companies):</b>
      <ul>
        <li style={{ textAlign: "left" }}>
          This includes directors in public limited companies that are in the
          business of manufacturing, trading or services
        </li>
        <li style={{ textAlign: "left" }}>
          Should earn at least Rs. Rs. 3,00,000 per annum
        </li>
      </ul>
      <b>Self Employed Individuals and Professionals (Partnership Firms):</b>
      <ul>
        <li style={{ textAlign: "left" }}>
          This includes self-employed partners in the business of manufacturing,
          trading or services
        </li>
        <li style={{ textAlign: "left" }}>
          Those who have a minimum turnover of Rs. Rs. 3,00,000 per annum
        </li>
      </ul>
    </>
  ),
  tab3: <><p>
        Enclosed below are S&S Financial Services Personal Loan Interest Rates &
        Charges:
      </p>
      <Table columns={columns} dataSource={data} scroll={{ y: 240 }} /></>,
  tab4: <>
      <ul>
        <li style={{ textAlign: "left" }}>
          <b>Salaried Individuals</b>
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
          <b>Self Employed Individuals(Sole Proprietorship)</b>
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

        <li style={{ textAlign: "left" }}><b>Self Employed Individuals(Public Limited Companies and Partnership Firms)</b></li>
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
    </>,
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
                <h1 style={{fontSize:"25px",backgroundColor:"black",color:"whitesmoke"}}>Four-Wheeler Loans</h1>
                <Card
                  style={{ width: "100%" }}
                  // title="Four-Wheeler Loans"
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
