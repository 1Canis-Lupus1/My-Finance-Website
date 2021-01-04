import React from "react";
import { Card, Avatar, Alert, Carousel, Button } from "antd";
import {
  HeartTwoTone,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function Loan() {
  return (
    <div>
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
            style={{ width: 300, margin: "20px", cursor: "pointer" }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            onClick={(e) => {
              console.log("Go To Personal Loans");
            }}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Personal Loans"
              description="This is the description"
            />
          </Card>
        </div>
        <div>
          {/* Two-Wheeler loans */}
          <Card
            style={{ width: 300, margin: "20px", cursor: "pointer" }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            onClick={(e) => {
              console.log("Go To Two-Wheeler Loans");
            }}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Two-Wheeler Loans"
              description="This is the description"
            />
          </Card>
        </div>
        <div>
          {/* Four Wheeler Loans */}
          <Card
            style={{ width: 300, margin: "20px", cursor: "pointer" }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            onClick={(e) => {
              console.log("Go To Four-Wheeler Loans");
            }}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Four-Wheeler Loans"
              description="This is the description"
            />
          </Card>
        </div>
      </Carousel>
    </div>
  );
}

export default Loan;
