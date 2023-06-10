import React, { useEffect, useState } from "react";
import { Table, Spin } from "antd";
import { CustomFlagIconFactory as FlagIconFactory } from "react-flag-icon-css";
import { calculateAge } from "./utils";
import { useNavigate } from "react-router-dom";

const FlagIcon = FlagIconFactory(React, { useCssModules: false });const columns = [
  {
    title: "Pozycja",
    dataIndex: "ranking",
    sorter: (a, b) => a.ranking - b.ranking,
  },
  {
    title: "Imię",
    dataIndex: "firstName",
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    responsive: ["lg"],
  },
  {
    title: "Nazwisko",
    dataIndex: "lastName",

    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
  },
  {
    title: "Punkty",
    dataIndex: "points",
    sorter: (a, b) => Number(a.points) - Number(b.points),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Narodowość",
    dataIndex: "nationality",
    render: (nationality) => <FlagIcon size={"lg"} code={nationality.toLowerCase()} />,
    responsive: ["sm"],
  },
  {
    title: "Wiek",
    dataIndex: "dateOfBirth",
    render: (dob) => calculateAge(dob),
    sorter: (a, b) => calculateAge(a.dateOfBirth) - calculateAge(b.dateOfBirth),
    sortDirections: ["descend", "ascend"],
    responsive: ["md"],
  },
  {
    title: "Wzrost",
    dataIndex: "height",
    render: (height) => `${height} cm`,
    sorter: (a, b) => a.height - b.height,
    responsive: ["md"],
  },
  {
    title: "Waga",
    dataIndex: "weight",
    render: (weight) => `${weight} kg`,
    sorter: (a, b) => a.weight - b.weight,
    responsive: ["md"],
  },
];
function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8765/api/player/players')
        .then(response => response.json())
        .then(data => {
          const transformedData = data.map(player => ({
            id: player.player_id,
            firstName: player.first_name,
            lastName: player.last_name,
            ranking: player.ranking,
            nationality: player.nationality,
            dateOfBirth: new Date(player.dateOfBirth),
            height: player.height,
            weight: player.weight,
            points: player.points,
          }));
          setPlayers(transformedData);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error:', error);
          setLoading(false);
        });
  }, []);

  const onRowClick = (record, rowIndex) => {
    return {
      onClick: (event) => {
        navigate(`/player/${record.id}`);
      },
    };
  };

  return (
      <Spin spinning={loading}>
        <Table
            dataSource={players}
            columns={columns}
            rowKey="id"
            onRow={onRowClick}
        />
      </Spin>
  );
}

export default Players;
