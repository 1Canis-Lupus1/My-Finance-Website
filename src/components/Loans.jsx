import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Card, Alert, Carousel } from "antd";
import PersonalPic from "../assets/personal-loan.webp";
import TwoWheelerPic from "../assets/two-wheeler.jpeg";
import FourWheelerPic from "../assets/car-loan.jpg";
import { SmileTwoTone, CarTwoTone, DingtalkOutlined } from "@ant-design/icons";
import PersonalLoans from "./PersonalLoans";
import { Content } from "antd/lib/layout/layout";

const { Meta } = Card;

function Loan() {
  const history = useHistory();
  return (
    <div>
      <Router>
        <Alert
          message="Welcome to Quick and easy Personalized Loans"
          description="Personal loans can go a long way in giving you the financial
        independence you need. With S&S Financial Services you can get quickly approved
        personal loans to help you with your monetary need. From home
        improvement to travel, our personal loan covers all your personal needs
        at a very attractive interest rate. S&S Financial Services offers its personal loan
        services only for existing S&S customers. Our personal loan
        service requires no collateral or documentation, allowing you easy
        access to your financial needs."
          type="info"
          style={{ margin: "40px 20px" }}
        />
        <Carousel autoplay>
          <div>
            {/* Personal Loans */}
            <Card
              style={{ width: 600, margin: "20px", cursor: "pointer" }}
              cover={<img alt="example" src={PersonalPic} />}
              onClick={(e) => {
                history.push('/per')
                return <Route path="/per" component={PersonalLoans} />
                // <Link to="/personal-loans" />;
              }}
            >
              <Meta
                avatar={<SmileTwoTone style={{ fontSize: "30px" }} />}
                title="Personal Loans"
                description="A personal loan is a type of unsecured loan that that you can borrow from a bank or financial institution if you require funds to pay for your financial needs. Click Here To Know More..."
              />
              {/* <Link to="/personal-loans" /> */}
            </Card>
          </div>
          <div>
            {/* Two-Wheeler loans */}
            <Card
              style={{ width: 600, margin: "20px", cursor: "pointer" }}
              cover={<img alt="example" src={TwoWheelerPic} />}
              onClick={(e) => {
                console.log("Go To Two-Wheeler Loans");
              }}
            >
              <Meta
                avatar={<DingtalkOutlined style={{ fontSize: "30px" }} />}
                title="Two-Wheeler Loans"
                description="Two wheeler loans are usually taken to buy a new bike or used bike. Auto loan rates are given at fixed or floating rate. If you have a low CIBIL score, then you should not apply in multiple banks for 2 wheeler loan as each rejection will drop your CIBIL score. Click Here To Know More..."
              />
            </Card>
          </div>
          <div>
            {/* Four Wheeler Loans */}
            <Card
              style={{ width: 600, margin: "20px", cursor: "pointer" }}
              cover={<img alt="example" src={FourWheelerPic} />}
              onClick={(e) => {
                console.log("Go To Four-Wheeler Loans");
              }}
            >
              <Meta
                avatar={<CarTwoTone style={{ fontSize: "30px" }} />}
                title="Four-Wheeler Loans"
                description="Millions of Indians today are upwardly mobile, and on the move. Many are looking at having their own car to reach their destination in time and in comfort. Now, the years of waiting and saving are over. A Car Loan will bring that dream of owning a vehicle within your reach. Click Here To Know More..."
              />
            </Card>
          </div>
        </Carousel>
        <Content>
          {/* <Route path="/personal-loans" component={PersonalLoans} /> */}
        </Content>
      </Router>
    </div>
  );
}

export default Loan;
