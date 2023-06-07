import React, { useState } from "react";
import { Button, Row, Col } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import PlayerForm from "./PlayerForm"; // Pamiętaj, aby dostosować ścieżkę do pliku PlayerForm.js

const Manager = () => {
  const [isPlayerFormVisible, setPlayerFormVisible] = useState(false);
  const [isTournamentFormVisible, setTournamentFormVisible] = useState(false);

  const onFinish = (values) => {
    console.log("Received values from form: ", values);
    setPlayerFormVisible(false); // ukrywa formularz po zakończeniu
    setTournamentFormVisible(false); // ukrywa formularz po zakończeniu
  };

  const togglePlayerFormVisible = () => {
    setPlayerFormVisible(!isPlayerFormVisible);
  };

  const toggleTournamentFormVisible = () => {
    setTournamentFormVisible(!isTournamentFormVisible);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h1>
        <br />
        Zarządzaj graczami i turniejami
      </h1>

      <Row gutter={16}>
        <Col>
          <Button
            type="primary"
            ghost
            icon={isPlayerFormVisible ? <MinusOutlined /> : <PlusOutlined />}
            onClick={togglePlayerFormVisible}
          >
            {isPlayerFormVisible ? "Ukryj formularz gracza" : "Dodaj gracza"}
          </Button>
        </Col>

        <Col>
          <Button
            type="primary"
            ghost
            icon={
              isTournamentFormVisible ? <MinusOutlined /> : <PlusOutlined />
            }
            onClick={toggleTournamentFormVisible}
          >
            {isTournamentFormVisible
              ? "Ukryj formularz turnieju"
              : "Dodaj turniej"}
          </Button>
        </Col>
      </Row>

      {isPlayerFormVisible && <PlayerForm onFinish={onFinish} />}

      {isTournamentFormVisible && <PlayerForm onFinish={onFinish} />}
    </div>
  );
};

export default Manager;
