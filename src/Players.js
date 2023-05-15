import React from 'react';
import { Table } from 'antd';
import {CustomFlagIconFactory as FlagIconFactory} from 'react-flag-icon-css';
import { calculateAge } from './utils';
import players from './players.json';
import { useNavigate } from "react-router-dom";

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

const columns = [
  {
    title: 'Rank',
    dataIndex: 'ranking',
    sorter: (a, b) => a.ranking - b.ranking,
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    responsive: ['lg'],
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    
    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
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
    responsive: ['sm'],
  },
  {
    title: 'Age',
    dataIndex: 'dateOfBirth',
    render: dob => calculateAge(dob),
    sorter: (a, b) => calculateAge(a.dateOfBirth) - calculateAge(b.dateOfBirth),
    sortDirections: ['descend', 'ascend'],
    responsive: ['md'],
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

  const navigate = useNavigate();

  const onRowClick = (record, rowIndex) => {
    return {
      onClick: event => {
        navigate(`/player/${record.id}`);
      },
    };
  };

  return (
      <Table 
        dataSource={players} 
        columns={columns} 
        rowKey='id'
        onRow={onRowClick}
        
      />
    );
}

export default Players;
