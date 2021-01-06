import React from "react";
import { Layout, BackTop } from "antd";

const { Footer } = Layout;

function MyFooter() {
  return (
    <div>
      <BackTop />
      <Footer style={{ textAlign: "center" }}>
        <b>
          Made With{" "}
          <i className="fa fa-spin">
            <i
              className="fa fa-heart"
              style={{ color: "red", fontSize: "20px" }}
            ></i>
          </i>{" "}
          In &nbsp;
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FeFJWc3Vv6BE2hDaz6OnCdhs1_5mwLa8og&usqp=CAU"
            alt="INDIA"
            height="40px"
            width="60px"
          />
        </b>
        <br /> © 2020 Created and Managed by <b>S&S Financial Services</b>
        <br />
        <small>
          <u>
            No Copyright Issues.Feel free to copy the design and ping us if you
            need any help!
          </u>
        </small>
      </Footer>
    </div>
  );
}

export default MyFooter;
