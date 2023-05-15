import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import FlagIconFactory from 'react-flag-icon-css';

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

const MatchCard = ({ match }) => {
  return (
    <Col key={match.id} xs={24} sm={12} md={8} lg={6}>
      <Card title={match.title}>
        <Row>
          <Col span={9} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <FlagIcon code={match.homePlayer.nationality.toLowerCase()} size='lg' />
            <p>{match.homePlayer.lastName}</p>
          </Col>
          
          <Col span={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
           {match.homeScore}
          </Col>
          <Col span={1} style={{  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
          -
          </Col>

          <Col span={2} style={{  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
          {match.awayScore}
          </Col>
          
          <Col span={9} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <FlagIcon code={match.awayPlayer.nationality.toLowerCase()} size='lg' />
            <p>{match.awayPlayer.lastName}</p>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};


export default MatchCard;
