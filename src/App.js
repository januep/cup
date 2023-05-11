import React from 'react';
import { Layout, Menu, Row, Col, Card } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

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
  }
  ];

function App() {
  const matchCards = matches.map(match => (
    <Col key={match.id} xs={24} sm={12} md={8} lg={6}>
      <Card title={match.round}>
        <p>{match.player1} vs {match.player2}</p>
      </Card>
    </Col>
  ));

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Mecze</Menu.Item>
          <Menu.Item key="2">Zawodniczki</Menu.Item>
          <Menu.Item key="3">Klasyfikacja</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <h1>Turniej Tenisa Kobiet</h1>
          <Row gutter={[16, 16]}>
            {matchCards}
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Tennis4U @2023
      </Footer>
    </Layout>
  );
}

export default App;
