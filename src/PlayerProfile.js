import React from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions, Tag } from 'antd';
import data from './players.json';
import {CustomFlagIconFactory as FlagIconFactory} from 'react-flag-icon-css';


const FlagIcon = FlagIconFactory(React, { useCssModules: false });

function PlayerProfile() {
  const { id } = useParams(); // Pobieramy ID zawodniczki z parametrów URL
  const player = data.find(p => p.id === Number(id));
// Znajdujemy zawodniczkę o danym ID

  if (!player) {
    return <p>Zawodniczka nie została znaleziona</p>;
  }

  return (
      <Descriptions
      title={player.firstName + " " + player.lastName}
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
        <Descriptions.Item label="Ranking">{player.ranking}</Descriptions.Item>
        <Descriptions.Item label="Nationality">{player.nationality}</Descriptions.Item>
        <Descriptions.Item label="Date of Birth">{player.dateOfBirth}</Descriptions.Item>
        <Descriptions.Item label="Height">{player.height}</Descriptions.Item>
        <Descriptions.Item label="Weight">{player.weight}</Descriptions.Item>
        <Descriptions.Item label="Points">{player.points}</Descriptions.Item>
      </Descriptions>
  );
}

export default PlayerProfile;
