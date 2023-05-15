import React from 'react';
import { Row } from 'antd';
import MatchCard from './MatchCard';
import matches from './matches.json';
import players from './players.json';

const MatchList = () => {
    const displayMatches = matches.map(match => {
      const homePlayer = players.find(player => player.id === match.homeId);
      const awayPlayer = players.find(player => player.id === match.awayId);
  
      return { ...match, homePlayer, awayPlayer };
    });
  
    return (
      <div>
        <h1>Rzym WTA, ziemna</h1>
        <Row gutter={[16, 16]}>
          {displayMatches.map(match => <MatchCard key={match.id} match={match} />)}
        </Row>
      </div>
    );
  };
  

export default MatchList;
