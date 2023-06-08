import React, { useState } from "react";
import { Form, Select, Button, Modal, Input, message, Divider } from "antd";
import players from "./players.json";
import { TrophyOutlined } from "@ant-design/icons";

const { Option } = Select;

const TournamentForm = ({ onFinish }) => {
  const [selectedPlayers, setSelectedPlayers] = useState({});

  const handleChange = (value, name) => {
    setSelectedPlayers((prev) => ({ ...prev, [name]: value }));
  };

  const filterOptions = (currentValue, option) => {
    return !Object.values(selectedPlayers).includes(option.value);
  };

  const handleFinish = (values) => {
    onFinish(values); // Process the form values here
    message.success({
      content: "Turniej został pomyślnie zapisany!",
    });
  };

  return (
    <Form name="manager" onFinish={handleFinish} autoComplete="off">
      <Divider orientation="left">
        {" "}
        <TrophyOutlined /> Nazwa turnieju
      </Divider>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please input the tournament name!",
          },
        ]}
      >
        <Input placeholder="Tournament name" />
      </Form.Item>
      <Divider orientation="left">Pierwszy półfinał</Divider>
      <Form.Item
        name="semiFinal1Player1"
        rules={[
          {
            required: true,
            message: "Please choose player 1!",
          },
        ]}
      >
        <Select
          placeholder="Wybierz zawodniczkę 1"
          onChange={(value) => handleChange(value, "semiFinal1Player1")}
          filterOption={filterOptions}
        >
          {players.map((player) => (
            <Option key={player.id} value={player.lastName}>
              {player.firstName} {player.lastName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="semiFinal1Player2"
        rules={[
          {
            required: true,
            message: "Please choose player 2!",
          },
        ]}
      >
        <Select
          placeholder="Wybierz zawodniczkę 2"
          onChange={(value) => handleChange(value, "semiFinal1Player2")}
          filterOption={filterOptions}
        >
          {players.map((player) => (
            <Option key={player.id} value={player.lastName}>
              {player.firstName} {player.lastName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Divider orientation="left">Drugi półfinał</Divider>
      <Form.Item
        name="semiFinal2Player1"
        rules={[
          {
            required: true,
            message: "Please choose player 3!",
          },
        ]}
      >
        <Select
          placeholder="Wybierz zawodniczkę 3"
          onChange={(value) => handleChange(value, "semiFinal2Player1")}
          filterOption={filterOptions}
        >
          {players.map((player) => (
            <Option key={player.id} value={player.lastName}>
              {player.firstName} {player.lastName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="semiFinal2Player2"
        rules={[
          {
            required: true,
            message: "Please choose player 4!",
          },
        ]}
      >
        <Select
          placeholder="Wybierz zawodniczkę 4"
          onChange={(value) => handleChange(value, "semiFinal2Player2")}
          filterOption={filterOptions}
        >
          {players.map((player) => (
            <Option key={player.id} value={player.lastName}>
              {player.firstName} {player.lastName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Zapisz turniej
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TournamentForm;
