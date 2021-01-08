import React, { Component } from "react";
import { Card, Button, Alert, Badge, Modal } from "antd";
import moment from "moment";

export class ShowIssues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      isModalVisible: false,
    };
  }

  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  componentDidMount() {
    var userArr = JSON.parse(localStorage.getItem("users"));
    console.log("Check 1:", userArr);
    if (userArr === null) {
      this.setState({
        userList: [],
      });
    } else {
      this.setState(
        {
          userList: userArr,
        },
        () => {
          console.log("User Array:", this.state.userList);
        }
      );
    }
  }

  render() {
    return (
      <div>
        {this.state.userList.length === 0 ? (
          <div class="card text-center">
            <div class="card-header card bg-success">
              <h2 style={{ color: "white", paddingBottom: "0px" }}>
                <b>No Pending Isues</b>
              </h2>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Navigate To <b>Contact Us</b> for adding a new issue
              </h5>
            </div>
          </div>
        ) : (
          this.state.userList.map((e, i) => {
            console.log("Each is:", e);
            return (
              <>
                <h5>
                  <b>
                    ISSUE #{i + 1}  
                  </b>
                   &nbsp;(Added On: <b><i>{e.date}</i></b>)
                </h5>
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Email</th>
                      <th scope="col">Issue</th>
                      <th scope="col">Status</th>
                      {/* <th scope="col">Admin Panel</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{e.name}</th>
                      <td>{e.phone}</td>
                      <td>{e.gender}</td>
                      <td>{e.email}</td>
                      <td>{e.issue}</td>
                      <td>
                        <Button style={{ backgroundColor: "green" }} disabled>
                          <b style={{ color: "white" }}>Pending</b>
                        </Button>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <hr />
              </>
            );
          })
        )}
      </div>
    );
  }
}

export default ShowIssues;
