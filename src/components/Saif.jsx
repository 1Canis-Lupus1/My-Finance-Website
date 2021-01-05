import React from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;

function Saif() {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="saik_khan"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          title="Saif Khan"
          description="USN- 1JB16CSabc"
        />
      </Card>
      <p>About Saif here</p>
    </div>
  );
}

export default Saif;
