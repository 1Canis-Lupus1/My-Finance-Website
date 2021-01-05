import React from "react";
import { Layout } from "antd";
import MyFooter from "./Footer";

const { Content, Footer, Sider } = Layout;

function FourWheelerLoans() {
  return (
    <div>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        ></Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <h1>Four wheeler Content Goes Here</h1>
            </div>
          </Content>
          <hr/>
          <MyFooter />
        </Layout>
      </Layout>
    </div>
  );
}

export default FourWheelerLoans;
