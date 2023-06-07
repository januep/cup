import React, { useState } from "react";
import { Layout } from "antd";
import "./App.css";
import TennisHeader from "./TennisHeader";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Players from "./Players";
import MatchList from "./MatchList";
import PlayerProfile from "./PlayerProfile";
import Manager from "./Manager";
import Login from "./Login"; // Upewnij się, że ścieżka do pliku Login.js jest poprawna

const { Content, Footer } = Layout;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Layout className="layout">
        <TennisHeader isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            {isLoggedIn ? (
              <Routes>
                <Route path="/players" element={<Players />} />
                <Route path="/matches" element={<MatchList />} />
                <Route path="/" element={<MatchList />} />
                <Route path="/player/:id" element={<PlayerProfile />} />
                <Route path="/manager" element={<Manager />} />
              </Routes>
            ) : (
              <Login onLogin={handleLogin} />
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Tennis4U @2023</Footer>
      </Layout>
    </Router>
  );
}

export default App;
