import React from 'react';
import { Layout, Row } from 'antd';
import './App.css';
import TennisHeader from './TennisHeader';
import MatchCard from './MatchCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Players from './Players';
import PlayerProfile from "./PlayerProfile";
import Counter from './features/counter/Counter';

const { Content, Footer } = Layout;

const matches = [
  {
    id: 1,
    round: 'Ćwierćfinał',
    player1: 'Iga Swiatek',
    player2: 'Maria Sakkari'
  },
  {
    id: 2,
    round: 'Ćwierćfinał',
    player1: 'Aryna Sabalenka',
    player2: 'Ons Jabeur'
  },
  {
    id: 3,
    round: 'Ćwierćfinał',
    player1: 'Jessica Pegula',
    player2: 'Elena Rybakina'
  },
  {
    id: 4,
    round: 'Ćwierćfinał',
    player1: 'Caroline Garcia',
    player2: 'Coco Gauff'
  },
  {
    id: 5,
    round: 'Półfinał',
    player1: 'Iga Swiatek',
    player2: 'Aryna Sabalenka'
  },
  {
    id: 6,
    round: 'Półfinał',
    player1: 'Jessica Pegula',
    player2: 'Caroline Garcia'
  },
  {
    id: 7,
    round: 'Finał',
    player1: 'Iga Swiatek',
    player2: 'Jessica Pegula'
  },
  ];

function App() {


  return (
    <Router>
    <Layout className="layout">
      <TennisHeader/>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
        <Routes>
              <Route path="/players" element={<Players />} />
              <Route path="/matches" element={
                <div>
                  <h1>Rzym WTA, ziemna</h1>
                  <Row gutter={[16, 16]}>
                    {matches.map(match => <MatchCard key={match.id} match={match} />)}
                  </Row>
                </div>
              } />
              <Route path="/" element={<Counter/>} />
              <Route path="/player/:id" element={<PlayerProfile />} />
            </Routes>
          
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Tennis4U @2023
      </Footer>
    </Layout>
    </Router>
  );
}

export default App;
