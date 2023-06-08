import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Button,
  Modal,
  message,
  Divider,
} from "antd";

const { Option } = Select;

const PlayerForm = ({ onFinish }) => {
  const handleFinish = (values) => {
    onFinish(values); // Process the form values here
    message.success({
      content: "Zawodnik został pomyślnie zapisany!",
    });
  };

  return (
    <Form name="manager" onFinish={handleFinish} autoComplete="off">
      <Divider orientation="left">Wprowadź dane zawodnika</Divider>
      {/* <Form.Item
        name="id"
        label="ID"
        rules={[
          {
            required: true,
            message: "Please input the player id!",
          },
        ]}
      >
        <InputNumber placeholder="Player ID" />
      </Form.Item> */}

      <Form.Item
        name="name"
        label="Imię"
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
        label="Nazwisko"
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
        label="Punkty"
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
        label="Waga"
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
        label="Wzrost"
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
        label="Narodowość"
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
        label="Data urodzenia"
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
          Zapisz
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PlayerForm;
