// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Descriptions, Avatar } from 'antd';
// import data from './players.json';
// import {CustomFlagIconFactory as FlagIconFactory} from 'react-flag-icon-css';
// import { calculateAge } from './utils';


// const FlagIcon = FlagIconFactory(React, { useCssModules: false });

// function PlayerProfile() {
//   const { id } = useParams(); // Pobieramy ID zawodniczki z parametrów URL
//   const player = data.find(p => p.id === Number(id));
// // Znajdujemy zawodniczkę o danym ID

//   if (!player) {
//     return <p>Zawodniczka nie została znaleziona</p>;
//   }

//   return (
//     <div>
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
      
//     <Avatar size={512} src={require(`./${player.image}`)} />
//   </div>
//       <Descriptions
//       title={player.firstName + " " + player.lastName}
//       bordered
//       column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
//       >
//         <Descriptions.Item label="Ranking">{player.ranking}</Descriptions.Item>
//         <Descriptions.Item label="Nationality"><FlagIcon code={player.nationality.toLowerCase()} /></Descriptions.Item>
//         <Descriptions.Item label="Date of Birth">{player.dateOfBirth} ({calculateAge(player.dateOfBirth)} yo)</Descriptions.Item>
//         <Descriptions.Item label="Height">{player.height} cm</Descriptions.Item>
//         <Descriptions.Item label="Weight">{player.weight} kg</Descriptions.Item>
//         <Descriptions.Item label="Points">{player.points}</Descriptions.Item>
//       </Descriptions>
//       </div>
//   );
// }

// export default PlayerProfile;


import React from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions, Avatar, Row } from 'antd';
import data from './players.json';
import matches from './matches.json';
import {CustomFlagIconFactory as FlagIconFactory} from 'react-flag-icon-css';
import { calculateAge } from './utils';
import MatchCard from './MatchCard';

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

function PlayerProfile() {
  const { id } = useParams(); // Pobieramy ID zawodniczki z parametrów URL
  const player = data.find(p => p.id === Number(id));
  // Znajdujemy zawodniczkę o danym ID

  if (!player) {
    return <p>Zawodniczka nie została znaleziona</p>;
  }

  const playerMatches = matches.filter(match => match.homeId === player.id || match.awayId === player.id)
    .map(match => {
      const homePlayer = data.find(p => p.id === match.homeId);
      const awayPlayer = data.find(p => p.id === match.awayId);
      return { ...match, homePlayer, awayPlayer };
    });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar size={512} src={require(`./${player.image}`)} />
      
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>

      <h1>{player.firstName + " " + player.lastName}</h1>
      </div>
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Ranking">{player.ranking}</Descriptions.Item>
        <Descriptions.Item label="Nationality"><FlagIcon code={player.nationality.toLowerCase()} /></Descriptions.Item>
        <Descriptions.Item label="Date of Birth">{player.dateOfBirth} ({calculateAge(player.dateOfBirth)} yo)</Descriptions.Item>
        <Descriptions.Item label="Height">{player.height} cm</Descriptions.Item>
        <Descriptions.Item label="Weight">{player.weight} kg</Descriptions.Item>
        <Descriptions.Item label="Points">{player.points}</Descriptions.Item>
      </Descriptions>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h2>Mecze zawodniczki</h2>
      </div>
      <Row gutter={[16, 16]}>
        {playerMatches.map(match => <MatchCard key={match.id} match={match} />)}
      </Row>
    </div>
  );
}

export default PlayerProfile;
