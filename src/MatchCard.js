import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const MatchCard = ({ match }) => {
  return (
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
  );
};

export default MatchCard;
