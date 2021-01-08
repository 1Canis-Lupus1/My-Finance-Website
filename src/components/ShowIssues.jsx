import React, { Component } from "react";
import { Card, Button } from "antd";

export class ShowIssues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }
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
          <Card style={{ width: 300 }}>
            <h1>No Issues To Display</h1>
          </Card>
        ) : (
          this.state.userList.map((e, i) => {
            console.log("Each is:", e);
            return (
              <>
                <h3>ISSUE NUMBER #{i + 1}</h3>
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Email</th>
                      <th scope="col">Issue</th>
                      <th scope="col">Status</th>
                      <th scope="col">Admin Panel</th>
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
                        <Button disabled>
                          <b style={{ color: "black" }}>Issue Pending</b>
                        </Button>
                      </td>
                      <td>
                        <Button>
                          <b style={{ color: "black" }}>Issue Resolved</b>
                        </Button>
                      </td>
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
