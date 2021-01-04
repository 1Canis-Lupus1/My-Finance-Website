import React from "react";
import { Carousel } from "antd";
import Img1 from "../assets/Finance1.jpeg";
import Img2 from "../assets/Finance2.png";
import Img3 from "../assets/Finance3.jpeg";
import Img4 from "../assets/Finance4.jpeg"

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
      <h1>Home for SS Finance</h1>
      <h3>Carousel here</h3>
      <Carousel autoplay>
        <div>
          <img src={Img1} style={contentStyle,{width:"100%"}} />
        </div>
        <div>
          <img src={Img2} style={contentStyle,{width:"100%"}} />
        </div>
        <div>
          <img src={Img3} style={contentStyle,{width:"100%"}} />
        </div>
        <div>
          <img src={Img4} style={contentStyle,{width:"100%"}} />
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
