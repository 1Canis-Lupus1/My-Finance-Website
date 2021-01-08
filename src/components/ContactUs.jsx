import React from "react";
import { Form, Input, Button, Alert, message, Select, Radio,DatePicker } from "antd";
import MyFooter from "./Footer";
import moment from 'moment';
import ConatctPic from "../assets/contact_us.jpg"

const key = "updatable";
const { Option } = Select;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const openMessage = () => {
  message.loading({ content: "Saving Data...", key });
  setTimeout(() => {
    message.success({
      content: "Data Successfully Submitted! We Will Reach Out To You Shortly",
      key,
      duration: 2,
    });
  }, 2000);
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="91">+91</Option>
      <Option value="87">+87</Option>
      <Option value="93">+93</Option>
    </Select>
  </Form.Item>
);

function ContactUs() {
  const [form] = Form.useForm();
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onFinish = (values) => {
    console.log(values);
    var users=JSON.parse(localStorage.getItem("users") || "[]")
    users.forEach(function(user,index){
      console.log("["+index+"]:"+user.id)
    })

    var user={
      name: values.user.name,
      email: values.user.email,
      phone: values.phone,
      gender: values.gender,
      issue: values.user.introduction,
      date: moment(Date.now()).format("dddd, MMMM Do YYYY")
    }

    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))

    form.resetFields();
  };

  const resetForm = () => {
    form.resetFields();
  };

  return (
    <div>
      <img src={ConatctPic} width="100%" />
      <hr />
      <Form
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        style={{ margin: "30px", border: "2px dotted orange", padding: "40px" }}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          values="Abcde"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please specify your gender!" }]}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="others">Others</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name={["user", "dob"]}
          label="D.O.B"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Your Issue">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            type="primary"
            onClick={(resetForm, openMessage)}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <MyFooter />
    </div>
  );
}

export default ContactUs;
