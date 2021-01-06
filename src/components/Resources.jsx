import React from "react";
import { Timeline } from "antd";
import MyFooter from "./Footer";

function Resources() {
  return (
    <div>
        <h1 style={{fontSize:"25px"}}><b>Our Journey summed up in a Nutshell !!</b></h1><br/>
      <Timeline>
          <Timeline.Item color="violet">
          <h1>Start</h1> 
        </Timeline.Item>
        <Timeline.Item color="green">
          Selecting the best parts from endless layouts present online 
        </Timeline.Item>
        <Timeline.Item color="blue">
          Started With the FrontEnd Services
        </Timeline.Item>
        <Timeline.Item color="red">
          <p>Added the essential dependencies using <b>Node Package Manager</b></p>
          <p>Installed various essential <b>Packages</b> <i>(AntD, Moment, Font-Awesome, etc.)</i></p>
          <p>Started Working on the Side Navigation Bar</p>
        </Timeline.Item>
        <Timeline.Item color="orange">
          <p>Making the Side Nav-Bar Toggle on Button click</p>
          <p>SubItems Added</p>
          <p><b>React-Router-Dom</b> added for basic routing between URLs</p>
        </Timeline.Item>
        <Timeline.Item color="black">
          <p>Functionalities Tested and Fixed</p>
        </Timeline.Item>
        <Timeline.Item color="yellow">
          <p><b>Resources</b> and <b>Testimonials</b> added</p>
        </Timeline.Item>
        <Timeline.Item color="Indigo">
          Deployed using <b>Surge</b> @ <a>http://finance-website.surge.sh</a>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <h1>End</h1>
        </Timeline.Item>
      </Timeline>
      <hr />
      <MyFooter />
    </div>
  );
}

export default Resources;
