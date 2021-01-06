import React from "react";
import { Card } from "antd";
import ShubhamPic from "../assets/Shubham.jpg"

const { Meta } = Card;

function Shubham() {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="shubham"
            src={ShubhamPic}
          />
        }
      >
        <Meta title="Shubham Choudhary" description="USN- 1JB16CS153" />
      </Card>
      <div style={{ marginTop: "20px" }}>
        <p style={{fontSize:"35px",backgroundColor:"orange",padding:"10px"}}>You CANNOT truly call yourself PEACEFUL, Unless You are capable of Great Violence. If you are not capable of Great Violence, then you are <b>not PEACEFUL</b>, you are <b>HARMLESS !!</b> </p>
        <h2>About Me:</h2>
        <ul style={{fontSize:"20px"}}>
          <li>I am currently a student in the final year of my B.Tech in Computer
          Science and Engineering.</li>
          <li>I am an aspiring learner who is having good
          fundamental understanding of <b>Html, CSS, JavaScript</b> and <b>ReactJs</b> in the
          domain of front end web development.</li>
          <li>Apart from that I have a very
          good grasp on <b>Core Java</b> and <b>Python</b>.</li>
          <li>I also know <b>Git </b>for version
          control.</li>
          <li>I am a <b>MERN</b> stack enthusiast <i>(MongoDb, ExpressJs, ReactJs, NodeJs)</i></li>
        </ul>
        <hr/><br/>
        <p>Reach Out To Me <b>@</b></p>
        <a href="https://github.com/1Canis-Lupus1" target="_blank"><i class="fa fa-github-square" style={{fontSize:"40px",color:"black"}}></i></a>&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/shubham-choudhary-8457a9141/" target="_blank"><i class="fa fa-linkedin-square" style={{fontSize:"40px",color:"blue"}}></i></a>&nbsp;&nbsp;
        <a href="https://gitlab.com/shubham74" target="_blank"><i class="fa fa-gitlab" style={{fontSize:"40px",color:"orange"}}></i></a>&nbsp;&nbsp;
        <a href="mailto:shubhamchoudhary081997@gmail.com" target="_blank"><i class="fa fa-envelope-open" style={{fontSize:"40px",color:"red"}}></i></a>&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default Shubham;
