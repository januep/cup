import React, { useState } from "react";
import { Button, Row, Col, Divider } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import PlayerForm from "./PlayerForm"; // Pamiętaj, aby dostosować ścieżkę do pliku PlayerForm.js
import TournamentForm from "./TournamentForm"; // Pamiętaj, aby dostosować ścieżkę do pliku TournamentForm.js

const Manager = () => {
  const [formType, setFormType] = useState(null);

  const onFinish = (values) => {
    console.log("Received values from form: ", values);
    setFormType(null); // ukrywa formularz po zakończeniu
  };

  const toggleForm = (type) => {
    if (formType === type) {
      setFormType(null);
    } else {
      setFormType(type);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <Divider>Zarządzanie graczami i turniejami</Divider>
      <Row gutter={16} justify="center">
        <Col>
          <Button
            type="primary"
            ghost
            icon={formType === "player" ? <MinusOutlined /> : <PlusOutlined />}
            onClick={() => toggleForm("player")}
          >
            {formType === "player" ? "Ukryj" : "Dodaj gracza"}
          </Button>
        </Col>

        <Col>
          <Button
            type="primary"
            ghost
            icon={
              formType === "tournament" ? <MinusOutlined /> : <PlusOutlined />
            }
            onClick={() => toggleForm("tournament")}
          >
            {formType === "tournament" ? "Ukryj" : "Dodaj turniej"}
          </Button>
        </Col>
      </Row>

      {formType === "player" && <PlayerForm onFinish={onFinish} />}

      {formType === "tournament" && <TournamentForm onFinish={onFinish} />}
    </div>
  );
};

export default Manager;
