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
      <InputNumber placeholder="Player ID" />
    </Form.Item>

    <Form.Item
      name="name"
      rules={[
        {
          required: true,
          message: "Please input the player name!",
        },
      ]}
    >
      <Input placeholder="Name" />
    </Form.Item>

    <Form.Item
      name="surname"
      rules={[
        {
          required: true,
          message: "Please input the player surname!",
        },
      ]}
    >
      <Input placeholder="Surname" />
    </Form.Item>

    <Form.Item
      name="points"
      rules={[
        {
          required: true,
          message: "Please input the player points!",
        },
      ]}
    >
      <InputNumber placeholder="Points" />
    </Form.Item>
    <Form.Item
      name="weight"
      rules={[
        {
          required: true,
          message: "Please input the player weight!",
        },
      ]}
    >
      <InputNumber placeholder="Weight" />
    </Form.Item>
    <Form.Item
      name="height"
      rules={[
        {
          required: true,
          message: "Please input the player height!",
        },
      ]}
    >
      <InputNumber placeholder="Height" />
    </Form.Item>
    <Form.Item
      name="nationality"
      rules={[
        {
          required: true,
          message: "Please select the player nationality!",
        },
      ]}
    >
      <Select placeholder="Select a nationality" allowClear>
        <Select.Option value="PL">Polish</Select.Option>
        <Select.Option value="US">American</Select.Option>
        <Select.Option value="DE">German</Select.Option>
        <Select.Option value="FR">French</Select.Option>
        <Select.Option value="ES">Spanish</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item
      name="birthDate"
      rules={[
        {
          required: true,
          message: "Please select the player birth date!",
        },
      ]}
    >
      <DatePicker placeholder="Select a birth date" />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default TournamentForm;
