import React from "react";
import ReviewPic from "../assets/review.png";
import MyFooter from "./Footer";
import { Comment, Avatar, Form, Button, List, Input, Rate, Card } from "antd";
import moment from "moment";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

class Reviews extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: "",
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: "Anonymous User",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPrvDwVG49SBYvvDQI0IqEFnuPr-iMGT7UA&usqp=CAU",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    return (
      <div>
        <img src={ReviewPic} width="100%" />
        <hr />
        <h1 style={{ fontSize: "30px" }}>
          <b>Why Does Your Reviews Matter To Us?</b>
        </h1>
        <p style={{ fontSize: "20px" }}>
          Reviews not only have the power to influence consumer decisions but
          can strengthen a company's credibility. Reviews have the power to gain
          customer trust, and they encourage people to interact with the
          company. Customer interaction ultimately leads to improved profits for
          businesses.
        </p>
        <p>A well defined customer review provided important insights like:</p>
        <ul>
          <li>
            <b>Better Understand your Customers & Improve Customer Service</b>
          </li>
          <li>
            <b>Credibility & Social Proof</b>
          </li>
          <li>
            <b>Fight with experience to save margins</b>
          </li>
          <li>
            <b>Allow Consumers to Have a Voice and Create Customer Loyalty</b>
          </li>
          <li>
            <b>Improve Rankings</b>
          </li>
          <li>
            <b>Consumers are Doing your Marketing for You</b>
          </li>
          <li>
            <b>Reviews Generate More Reviews</b>
          </li>
        </ul>
        <hr />
        <h1 style={{ fontSize: "25px" }}>
          <b>What Our Customers Have To Say</b>
        </h1>
        {/* User1 */}
        <>
          <Card style={{ width: 300, margin: "5px" }} title="Shubham">
            <p>Loved the Service and Prompt actions From users</p>
            <Rate value={3} character={({ index }) => customIcons[index + 1]} />
          </Card>
        </>
        {/* User2 */}
        <>
          <Card style={{ width: 300, margin: "5px" }} title="Saif">
            <p>
              The Polite Behaviour Of the Staff is beyond any appreciations!!
            </p>
            <Rate value={4} character={({ index }) => customIcons[index + 1]} />
          </Card>
        </>
        {/* User3 */}
        <>
          <Card style={{ width: 300, margin: "5px" }} title="Sai Venkat">
            <p>East Or West, S & S Finances is the BEST!! ;-P</p>
            <Rate value={5} character={({ index }) => customIcons[index + 1]} />
          </Card>
        </>
        {/* User4 */}
        <>
          <Card style={{ width: 300, margin: "5px" }} title="Project Reviewer">
            <p>1 Star..For Writing all the Fake reviews above!!</p>
            <Rate value={1} character={({ index }) => customIcons[index + 1]} />
          </Card>
        </>
        <>
          {comments.length > 0 && <CommentList comments={comments} />}
          <Comment
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Editor
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        </>
        <hr />
        <MyFooter />
      </div>
    );
  }
}

export default Reviews;
