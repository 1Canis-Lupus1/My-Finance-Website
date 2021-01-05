import React from "react";
import BestLoan from "../assets/MyLogo.jpeg";
import { Card } from 'antd';

function Home() {
  return (
    <div>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={BestLoan} />}
  ></Card>
      <h2 style={{ textAlign: "end", fontSize: "30px" }}>
        <b>
          Your Search For the Perfect and Most Affordable Loans Ends Here...
        </b>
      </h2>
      <hr />
      <h3 style={{ fontSize: "30px", color: "blue" }}>
        <b>Why Choose Us</b>
      </h3>
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
      <h2>Finding you the right loan</h2>
      <p>
        We look through hundreds of loan products from around 30 of Australia’s
        most trusted lenders. Your finance professional then pinpoints one that
        truly matches your ambitions. We have access to more lenders then most
        major mortgage broking companies in Australia, which means we can dig
        deep, and find a loan that is right for you. Our home loan service is
        completely free of charge, as the lender you choose pays us direct once
        the loan is settled.
      </p>
      <br/><br/>
      <h2>The Process is effortless</h2>
      <p>Our finance professionals handle all of the paperwork, from application right through to settlement. Everything is taken care of for you, so you can focus on getting ready for your perfect home.If there is, we help you refinance to a cheaper rate. In many cases, you will be able to save a significant amount through refinancing.</p>
    </div>
  );
}

export default Home;
