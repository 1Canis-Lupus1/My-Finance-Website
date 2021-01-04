import React from "react";
import { Carousel, Card } from "antd";
import Img1 from "../assets/Finance1.jpeg";
import Img2 from "../assets/Finance2.png";
import Img3 from "../assets/Finance3.jpeg";
import Img4 from "../assets/Finance4.jpeg";

const { Meta } = Card;

function Home() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <Carousel autoplay>
        <div>
          <Card
            hoverable
            style={{ width: 250, margin: "20px" }}
            cover={<img alt="s&s-logo" src={Img4} />}
          >
            <Meta
              title="Welcome"
              description="With a trust legacy of customers on our group, we strive to fulfil the aspirations of every Indian."
            />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{ width: 250, margin: "20px" }}
            cover={<img alt="s&s-logo" src={Img2} />}
          >
            <Meta
              title="Our Set of Loans"
              description="We Provide a wide variety of loans services for our valuable customers like Personal Loans, Two-Wheeler Loans,Four Wheeler Loans, etc."
            />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{ width: 250, margin: "20px" }}
            cover={<img alt="s&s-logo" src={Img3} />}
          >
            <Meta
              title="Why Choose Us?"
              description="Reasons for why to choose us goes here"
            />
          </Card>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
