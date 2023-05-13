import React from 'react';
import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {CustomFlagIconFactory as FlagIconFactory} from 'react-flag-icon-css';

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

const players = [{
    id: 1,
    firstName: "Iga",
    lastName: "Swiatek",
    ranking: 1,
    nationality: 'PL',
    dateOfBirth: "2001-05-31",
    height: 176,
    weight: 62
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Sakkari",
    ranking: 2,
    nationality: 'GR',
    dateOfBirth: "1995-07-25",
    height: 173,
    weight: 64
  },
  {
    id: 3,
    firstName: "Aryna",
    lastName: "Sabalenka",
    ranking: 3,
    nationality: 'BY',
    dateOfBirth: "1998-05-05",
    height: 182,
    weight: 82
  },
  {
    id: 4,
    firstName: "Ons",
    lastName: "Jabeur",
    ranking: 4,
    nationality: 'TN',
    dateOfBirth: "1994-08-28",
    height: 167,
    weight: 66
  },
  {
    id: 5,
    firstName: "Jessica",
    lastName: "Pegula",
    ranking: 5,
    nationality: 'US',
    dateOfBirth: "1994-02-24",
    height: 165,
    weight: 68
  },
  {
    id: 6,
    firstName: "Elena",
    lastName: "Rybakina",
    ranking: 6,
    nationality: 'KZ',
    dateOfBirth: "1999-06-17",
    height: 184,
    weight: 70
  },
  {
    id: 7,
    firstName: "Caroline",
    lastName: "Garcia",
    ranking: 7,
    nationality: 'FR',
    dateOfBirth: "1993-10-16",
    height: 177,
    weight: 62
  },
  {
    id: 8,
    firstName: "Coco",
    lastName: "Gauff",
    ranking: 8,
    nationality: 'US',
    dateOfBirth: "2004-03-13",
    height: 175,
    weight: 59
  }
];

function Players() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={players}
      renderItem={player => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <span>
                <FlagIcon code={player.nationality.toLowerCase()} /> 
                {/* <Avatar icon={<UserOutlined />} /> */}
              </span>
            }
            
            title={`${player.firstName} ${player.lastName}`}
            description={`Ranking: ${player.ranking}, 
                          Date of Birth: ${player.dateOfBirth},
                          Height: ${player.height} cm,
                          Weight: ${player.weight} kg`}
          />
        </List.Item>
      )}
    />
  );
}

export default Players;