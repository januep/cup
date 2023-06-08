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
import { UserOutlined } from "@ant-design/icons";

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
      <Divider orientation="left">
        <UserOutlined /> Wprowadź dane zawodnika
      </Divider>
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
        <Input placeholder="Anna" />
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
        <Input placeholder="Kowalska" />
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
        <InputNumber placeholder="1000" />
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
        <InputNumber placeholder="55" />
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
        <InputNumber placeholder="172" />
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
        <Select placeholder="Polska" allowClear>
          <Select.Option value="PL">Polska</Select.Option>
          <Select.Option value="US">Stany Zjednoczone</Select.Option>
          <Select.Option value="DE">Niemcy</Select.Option>
          <Select.Option value="FR">Francja</Select.Option>
          <Select.Option value="ES">Hiszpania</Select.Option>
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
        <DatePicker placeholder="01.01.2001" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" ghost>
          Zapisz
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PlayerForm;
