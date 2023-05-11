import React from 'react';
import { Layout, Menu, Row, Col, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
  const matchCards = matches.map(match => (
    <Col key={match.id} xs={24} sm={12} md={8} lg={6}>
      <Card title={match.round}>
        <Row>
          <Col span={10}>
            <Avatar icon={<UserOutlined />} />
            <p>{match.player1}</p>
          </Col>
          <Col span={4}>
            <p style={{ textAlign: 'center' }}>vs</p>
            <p style={{ textAlign: 'center' }}>2 - 0</p>
          </Col>
          <Col span={10}>
            <Avatar icon={<UserOutlined />} />
            <p>{match.player2}</p>
          </Col>
        </Row>
      </Card>
    </Col>
  ));

  return (
    <Layout className="layout">
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', background: '#3A5400'}}>
      <div
  style={{
    float: 'left',
    width: 120,
    height: 31,
    margin: '16px 24px 16px 0',
    background: `url(${process.env.PUBLIC_URL + "/Tennis4U.png"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
/>

        <Menu
        style={{ background: '#3A5400' }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <h1>Rzym WTA, ziemna</h1>
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
