import React from 'react';
import { Table } from 'antd';
import {CustomFlagIconFactory as FlagIconFactory} from 'react-flag-icon-css';
import { calculateAge } from './utils';

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

const players = [
  {
    "id": 1,
    "firstName": "Iga",
    "lastName": "Swiatek",
    "ranking": 1,
    "nationality": "PL",
    "dateOfBirth": "2001-05-31",
    "height": 176,
    "weight": 62,
    "points": 9625
  },
  {
    "id": 2,
    "firstName": "Aryna",
    "lastName": "Sabalenka",
    "ranking": 2,
    "nationality": "BY",
    "dateOfBirth": "1998-05-05",
    "height": 182,
    "weight": 82,
    "points": 7881
  },
  {
    "id": 3,
    "firstName": "Jessica",
    "lastName": "Pegula",
    "ranking": 3,
    "nationality": "US",
    "dateOfBirth": "1994-02-24",
    "height": 165,
    "weight": 68,
    "points": 5300
  },
  {
    "id": 4,
    "firstName": "Caroline",
    "lastName": "Garcia",
    "ranking": 4,
    "nationality": "FR",
    "dateOfBirth": "1993-10-16",
    "height": 177,
    "weight": 62,
    "points": 5025
  },
  {
    "id": 5,
    "firstName": "Coco",
    "lastName": "Gauff",
    "ranking": 5,
    "nationality": "US",
    "dateOfBirth": "2004-03-13",
    "height": 175,
    "weight": 59,
    "points": 4345
  },
  {
    "id": 6,
    "firstName": "Elena",
    "lastName": "Rybakina",
    "ranking": 6,
    "nationality": "KZ",
    "dateOfBirth": "1999-06-17",
    "height": 184,
    "weight": 70,
    "points": 4195
  },
  {
    "id": 7,
    "firstName": "Ons",
    "lastName": "Jabeur",
    "ranking": 7,
    "nationality": "TN",
    "dateOfBirth": "1994-08-28",
    "height": 167,
    "weight": 66,
    "points": 4116
  },
  {
    "id": 8,
    "firstName": "Maria",
    "lastName": "Sakkari",
    "ranking": 8,
    "nationality": "GR",
    "dateOfBirth": "1995-07-25",
    "height": 173,
    "weight": 64,
    "points": 3516
  }
]


const columns = [
  {
    title: 'Ranking',
    dataIndex: 'ranking',
    sorter: (a, b) => a.ranking - b.ranking,
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    responsive: ['xl'],
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    responsive: ['md'],
  },
  {
    title: 'Points',
    dataIndex: 'points',
    sorter: (a, b) => Number(a.points) - Number(b.points),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Nationality',
    dataIndex: 'nationality',
    render: nationality => <FlagIcon code={nationality.toLowerCase()} />,
    sorter: (a, b) => a.nationality.localeCompare(b.nationality),
  },
  {
    title: 'Age',
    dataIndex: 'dateOfBirth',
    render: dob => calculateAge(dob),
    sorter: (a, b) => calculateAge(a.dateOfBirth) - calculateAge(b.dateOfBirth),
    sortDirections: ['descend'],
  },
  {
    title: 'Height',
    dataIndex: 'height',
    render: height => `${height} cm`,
    sorter: (a, b) => a.height - b.height,
    responsive: ['md'],
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    render: weight => `${weight} kg`,
    sorter: (a, b) => a.weight - b.weight,
    responsive: ['md'],
  },
];

function Players() {
  return (
    <Table dataSource={players} columns={columns} rowKey='id' />
  );
}

export default Players;
