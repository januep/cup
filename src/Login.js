import React, { useState } from "react";
import { Input, Button, Form, message } from "antd";
import { LoginOutlined } from "@ant-design/icons";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username, password);
    // For now, just pass the username and password to the onLogin function
    if (username === "admin" && password === "admin") {
      onLogin(true);
    } else {
      onLogin(false);
    }
    message.success("Pomyślnie zalogowano"); // display success message
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h1>Zaloguj się</h1>
      <Form onFinish={handleLogin}>
        <Form.Item
          label="Nazwa"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            value={username}
            placeholder="admin"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Hasło"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            value={password}
            placeholder="admin"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" ghost>
            <LoginOutlined /> Zaloguj się
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
