import React from "react";
import { Layout } from "antd";
import "./App.css";
import TennisHeader from "./TennisHeader";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; //BrowserRouter lepszy
import Players from "./Players";
import MatchList from "./MatchList";
import PlayerProfile from "./PlayerProfile";
import Manager from "./Manager";

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <TennisHeader />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/players" element={<Players />} />
              <Route path="/matches" element={<MatchList />} />
              <Route path="/" element={<MatchList />} />
              <Route path="/player/:id" element={<PlayerProfile />} />
              <Route path="/manager" element={<Manager />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Tennis4U @2023</Footer>
      </Layout>
    </Router>
  );
}

export default App;
