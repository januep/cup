import React, { useEffect, useState } from 'react';
import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Ta funkcja będzie pobierać dane o zawodniczkach z pliku players.json
    async function fetchPlayers() {
      const response = await fetch('/players.json');
      console.log(response)
      const data = await response.json();
      setPlayers(data.players);
    }

    fetchPlayers();
  }, []);

  return (
    <List
      itemLayout="horizontal"
      dataSource={players}
      renderItem={player => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar icon={<UserOutlined />} />}
            title={`${player.firstName} ${player.lastName}`}
            description={`Ranking: ${player.ranking}`}
          />
        </List.Item>
      )}
    />
  );
}

export default Players;
