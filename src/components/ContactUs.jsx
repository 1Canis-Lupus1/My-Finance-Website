import React from "react";
import { Form, Input, Button, Alert, message } from "antd";
import MyFooter from "./Footer";

const key = "updatable";

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

function ContactUs() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
  };

  const resetForm = () => {
    form.resetFields();
  };

  return (
    <div>
      <span>
        <Alert
          message="Need Personalised Help?"
          description="Feel Free To Reach Out To Us !"
          style={{ textAlign: "center" }}
        />
      </span>

      <hr />
      <Form
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        style={{ marginTop: "30px" }}
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
