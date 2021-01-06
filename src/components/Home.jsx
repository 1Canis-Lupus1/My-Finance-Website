import React from "react";
import BestLoan from "../assets/MyLogo.jpeg";
import { Card } from "antd";
import MyFooter from "./Footer";
import {
  ClockCircleFilled,
  PhoneFilled,
  MoneyCollectFilled,
  ThunderboltFilled,
} from "@ant-design/icons";
import EasyPic from "../assets/easy.jpeg";
import RightPic from "../assets/right.jpeg";

function Home() {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={BestLoan} />}
      ></Card>
      <h2 style={{ textAlign: "end", fontSize: "50px" }}>
        <b>
          Your Search For the Perfect and Most Affordable Loans Ends Here...
        </b>
      </h2>
      <hr />
      <h3 style={{ fontSize: "30px", color: "blue" }}>
        <b>Why Choose Us</b>
      </h3>
      <div style={{ padding: "20px", margin: "15px" }}>
        <ul>
          <li style={{ fontSize: "30px" }}>
            <span style={{ fontSize: "35px" }}>
              <ClockCircleFilled
                style={{ fontSize: "40px", textAlign: "left" }}
              />{" "}
              <b>Quick Approval</b>
            </span>
          </li>
          <li style={{ fontSize: "30px" }}>
            <span style={{ fontSize: "35px", textAlign: "right" }}>
              <PhoneFilled style={{ fontSize: "40px" }} />{" "}
              <b>24/7 Customer Support</b>
            </span>
            <br />
          </li>
          <li style={{ fontSize: "30px" }}>
            <span style={{ fontSize: "35px" }}>
              <MoneyCollectFilled style={{ fontSize: "40px" }} />{" "}
              <b>Get Cashback Offers</b>
            </span>
          </li>
          <li style={{ fontSize: "30px" }}>
            <span style={{ fontSize: "35px" }}>
              <ThunderboltFilled style={{ fontSize: "40px" }} />{" "}
              <b>Best Rate of Interest</b>
            </span>
          </li>
        </ul>
      </div>

      <p>
        We help you achieve your finance ambitions with the right loan – whether
        you’re looking for a new home, an investment property, your next vehicle
        or finance for your business. Our finance professionals take the time to
        understand your goals, lifestyle and budget. Then we use this
        information to research and tailor a loan that matches them.
      </p>
      <b>That way you know the loan you have chosen is right for you.</b>
      <br />
      <br />

      <h2
        style={{ fontSize: "40px", backgroundColor: "cyan", padding: "10px" }}
      >
        <b>Finding you the right loan</b>
      </h2>
      <img src={RightPic} height="200vh" style={{ margin: "10px" }} />
      <p>
        We look through hundreds of loan products from around 30 of Indias’s
        most trusted lenders. Your finance professional then pinpoints one that
        truly matches your ambitions. We have access to more lenders then most
        major mortgage broking companies in Australia, which means we can dig
        deep, and find a loan that is right for you. Our home loan service is
        completely free of charge, as the lender you choose pays us direct once
        the loan is settled.
      </p>
      <br />
      <br />
      <h2
        style={{ fontSize: "40px", backgroundColor: "cyan", padding: "10px" }}
      >
        <b>The Process is effortless</b>
      </h2>
      <img src={EasyPic} height="200vh" />
      <p>
        Our finance professionals handle all of the paperwork, from application
        right through to settlement. Everything is taken care of for you, so you
        can focus on getting ready for your perfect home.If there is, we help
        you refinance to a cheaper rate. In many cases, you will be able to save
        a significant amount through refinancing.
      </p>
      <hr />

      <MyFooter />
    </div>
  );
}

export default Home;
