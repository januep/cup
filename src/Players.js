import React from 'react';
import { Table } from 'antd';
import {CustomFlagIconFactory as FlagIconFactory} from 'react-flag-icon-css';

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

const players = [
  {
    "id": 1,
    "firstName": "Iga",
    "lastName": "Swiatek",
    "ranking": 1,
    "nationality": "Poland",
    "dateOfBirth": "2001-05-31",
    "height": 176,
    "weight": 62
  },
  {
    "id": 2,
    "firstName": "Maria",
    "lastName": "Sakkari",
    "ranking": 2,
    "nationality": "Greece",
    "dateOfBirth": "1995-07-25",
    "height": 173,
    "weight": 64
  },
  {
    "id": 3,
    "firstName": "Aryna",
    "lastName": "Sabalenka",
    "ranking": 3,
    "nationality": "Belarus",
    "dateOfBirth": "1998-05-05",
    "height": 182,
    "weight": 82
  },
  {
    "id": 4,
    "firstName": "Ons",
    "lastName": "Jabeur",
    "ranking": 4,
    "nationality": "Tunisia",
    "dateOfBirth": "1994-08-28",
    "height": 167,
    "weight": 66
  },
  {
    "id": 5,
    "firstName": "Jessica",
    "lastName": "Pegula",
    "ranking": 5,
    "nationality": "United States",
    "dateOfBirth": "1994-02-24",
    "height": 165,
    "weight": 68
  },
  {
    "id": 6,
    "firstName": "Elena",
    "lastName": "Rybakina",
    "ranking": 6,
    "nationality": "Kazakhstan",
    "dateOfBirth": "1999-06-17",
    "height": 184,
    "weight": 70
  },
  {
    "id": 7,
    "firstName": "Caroline",
    "lastName": "Garcia",
    "ranking": 7,
    "nationality": "France",
    "dateOfBirth": "1993-10-16",
    "height": 177,
    "weight": 62
  },
  {
    "id": 8,
    "firstName": "Coco",
    "lastName": "Gauff",
    "ranking": 8,
    "nationality": "United States",
    "dateOfBirth": "2004-03-13",
    "height": 175,
    "weight": 59
  }
];

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
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
  },
  
  {
    title: 'Nationality',
    dataIndex: 'nationality',
    render: nationality => <FlagIcon code={nationality.toLowerCase()} />,
    sorter: (a, b) => a.nationality.localeCompare(b.nationality),
  },
  {
    title: 'Date of Birth',
    dataIndex: 'dateOfBirth',
    sorter: (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth),
  },
  {
    title: 'Height',
    dataIndex: 'height',
    sorter: (a, b) => a.height - b.height,
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    sorter: (a, b) => a.weight - b.weight,
  },
];

function Players() {
  return (
    <Table dataSource={players} columns={columns} rowKey='id' />
  );
}

export default Players;
