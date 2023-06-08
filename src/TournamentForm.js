import React from "react";
import { Form, Input, InputNumber, Select, DatePicker, Button } from "antd";

const { Option } = Select;

const TournamentForm = ({ onFinish }) => (
  <Form name="manager" onFinish={onFinish} autoComplete="off">
    <br />
    <Form.Item
      name="id"
      rules={[
        {
          required: true,
          message: "Please choose player!",
        },
      ]}
    >
      <InputNumber placeholder="Tournament ID" />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default TournamentForm;
