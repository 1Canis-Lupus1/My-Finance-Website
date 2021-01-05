import React from "react";
import { Card, Avatar } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import MyLogo from "../assets/MyLogo.jpeg";
import MyFooter from "./Footer";

const {Meta}=Card

function About() {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 100, height: 100, border: "2px dotted blue" }}
        cover={<img alt="logo" src={MyLogo} />}
      ></Card>
      <br />
      <h2>
        <b>A Brief Introduction</b>
      </h2>
      <hr />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis eveniet totam officiis perferendis rerum, quia consectetur deleniti, cum sapiente, fugiat maxime suscipit odit. Animi, eos iste tempora ad amet quia?</p>
      <hr/>
      <MyFooter />
    </div>
  );
}

export default About;
