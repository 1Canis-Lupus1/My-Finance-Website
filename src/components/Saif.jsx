import React from "react";
import { Card, Avatar } from "antd";
import SaifPic from "../assets/Saif.jpeg"

const { Meta } = Card;

function Saif() {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="saik_khan"
            src={SaifPic}
          />
        }
      >
        <Meta
          title="Saif Khan"
          description="USN- 1JB17CS429"
        />
      </Card>
      <p style={{fontSize:"35px",backgroundColor:"green",color:"whitesmoke",padding:"10px"}}>I have always turned my <b>WORDS</b> into <b>ACTION</b> and remain doing so and I have always been honest to my goals and will remain.</p>
      <h2>About Me:</h2>
        <ul style={{fontSize:"20px"}}>
          <li>I am currently a student in the final year of my B.Tech in Computer
          Science and Engineering.</li>
          <li>I am an aspiring learner who is very skilled in <b>Customer Relations</b>,</li>
          <li>I am experienced in <b>Event Management</b> with a demonstrated history of working in the events service industry.</li>
          <li>I am very skilled in <b>Entrepreneurship, Communication skills, Public speaking</b> and <b>Ethical Leadership</b>.</li>
        </ul>
      <hr/><br/>
        <p>Reach Out To Me <b>@</b></p>
        <a href="https://github.com/saifkhan7151" target="_blank"><i class="fa fa-github-square" style={{fontSize:"40px",color:"black"}}></i></a>&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/saif-khan-b95bb1157" target="_blank"><i class="fa fa-linkedin-square" style={{fontSize:"40px",color:"blue"}}></i></a>&nbsp;&nbsp;
        {/* <a href="https://gitlab.com/shubham74" target="_blank"><i class="fa fa-gitlab" style={{fontSize:"40px",color:"orange"}}></i></a>&nbsp;&nbsp; */}
        <a href="mailto:saifkhan7151@gmail.com" target="_blank"><i class="fa fa-envelope-open" style={{fontSize:"40px",color:"red"}}></i></a>&nbsp;&nbsp;
    </div>
  );
}

export default Saif;
