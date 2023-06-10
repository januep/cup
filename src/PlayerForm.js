import React from "react";
import {
    Form,
    Input,
    InputNumber,
    Select,
    DatePicker,
    Button,
    message,
    Divider,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from 'axios';
import moment from 'moment';

const { Option } = Select;

const PlayerForm = () => {
    const handleFinish = async (values) => {
        const playerData = {
            first_name: values.name,
            last_name: values.surname,
            points: values.points,
            weight: values.weight,
            height: values.height,
            nationality: values.nationality,
            dateOfBirth: moment(values.birthDate).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),  // Zmieniony format dat
        };
        console.log(playerData)
        console.log("KURWA")

        try {
            const response = await axios.post('http://localhost:8765/api/player/add', playerData);
               message.success({
                    content: "Zawodnik został pomyślnie zapisany!",
                });

        } catch (error) {
            console.error(error.response);
            message.error({
                content: "Coś poszło nie tak, spróbuj ponownie.",
            });
        }
    };

  return (
    <Form name="manager" onFinish={handleFinish} autoComplete="off">
      <Divider orientation="left">
        <UserOutlined /> Wprowadź dane zawodnika
      </Divider>

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
