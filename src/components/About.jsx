import React from "react";
import { Card } from "antd";
import MyLogo from "../assets/MyLogo.jpeg";
import MyFooter from "./Footer";

const { Meta } = Card;

function About() {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240,border:"2px dotted blue" }}
        cover={<img alt="logo" src={MyLogo} />}
      >
        <Meta title="S & S Finance Services" />
      </Card>
      <br/>
      <h2><b>Our Story</b></h2>
      <hr/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil libero quod nesciunt explicabo. Recusandae doloremque minima mollitia dicta incidunt dolores quia, iure iste inventore adipisci vel! Tempore facere inventore eligendi</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error expedita, ducimus quasi aliquam laboriosam nulla cum deserunt ipsa eveniet consectetur vitae ea perspiciatis minus debitis enim exercitationem blanditiis modi quo.lo</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At necessitatibus tenetur dignissimos officia. Commodi consequatur perspiciatis tempore atque, odit voluptates dolorum tenetur ea accusantium iusto. Ipsam, et? Nulla, sequi beatae.</p>
      <hr/>
      <MyFooter />
    </div>
  );
}

export default About;
