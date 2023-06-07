// Autor
import React, { useState } from "react";
import { Button } from "antd";
import PlayerForm from "./PlayerForm";

const Manager = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const onFinish = (values) => {
    console.log("Received values from form: ", values);
    setFormVisible(false); // ukrywa formularz po zakończeniu
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <br />
      <Button type="primary" onClick={() => setFormVisible(true)}>
        Dodaj gracza
      </Button>

      {isFormVisible && <PlayerForm onFinish={onFinish} />}
    </div>
  );
};

export default Manager;
