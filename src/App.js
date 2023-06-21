import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { Layout, message } from "antd";
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
  AOS.init({
    duration: 1000, // Czas trwania animacji w milisekundach
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Add this line

  const handleLogin = (isAdmin) => {
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false); // Reset isAdmin on logout
    message.success({
      content: "Pomyślnie wylogowano!",
    });
  };

  return (
      <Router>
        <Layout className="layout">
          <TennisHeader
              isLoggedIn={isLoggedIn}
              isAdmin={isAdmin} // Dodaj tę linię
              onLogout={handleLogout}
          />

          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              {isLoggedIn ? (
                  <Routes>
                    <Route path="/players" element={<Players />} />
                    <Route path="/matches" element={<MatchList />} />
                    <Route path="/" element={<MatchList />} />

                    <Route path="/player/:id" element={<PlayerProfile />} />
                    {isAdmin && <Route path="/manager" element={<Manager />} />}
                  </Routes>
              ) : (
                  <Login onLogin={handleLogin} />
              )}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>@2023 Tennis4U</Footer>
        </Layout>
      </Router>
  );
}

export default App;