// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { Descriptions, Avatar, Row, Divider } from "antd";
// import data from "./players.json";
// import matches from "./matches.json";
// import { CustomFlagIconFactory as FlagIconFactory } from "react-flag-icon-css";
// import { calculateAge } from "./utils";
// import MatchCard from "./MatchCard";
//
// const FlagIcon = FlagIconFactory(React, { useCssModules: false });
//
// function PlayerProfile() {
//   const { id } = useParams(); // Pobieramy ID zawodniczki z parametrów URL
//   const player = data.find((p) => p.id === Number(id));
//   // Znajdujemy zawodniczkę o danym ID
//
//   if (!player) {
//     return <p>Zawodniczka nie została znaleziona</p>;
//   }
//
//   const playerMatches = matches
//     .filter((match) => match.homeId === player.id || match.awayId === player.id)
//     .map((match) => {
//       const homePlayer = data.find((p) => p.id === match.homeId);
//       const awayPlayer = data.find((p) => p.id === match.awayId);
//       return { ...match, homePlayer, awayPlayer };
//     });
//
//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Avatar size={256} src={require(`./${player.image}`)} />
//       </div>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Divider>{player.firstName + " " + player.lastName}</Divider>
//       </div>
//       <Descriptions
//         bordered
//         column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
//       >
//         <Descriptions.Item label="Pozycja">
//           <Link to="/players">{player.ranking}</Link>
//         </Descriptions.Item>
//
//         <Descriptions.Item label="Narodowość">
//           <FlagIcon code={player.nationality.toLowerCase()} />
//         </Descriptions.Item>
//         <Descriptions.Item label="Data urodzenia">
//           {player.dateOfBirth} ({calculateAge(player.dateOfBirth)})
//         </Descriptions.Item>
//         <Descriptions.Item label="Wzrost">{player.height} cm</Descriptions.Item>
//         <Descriptions.Item label="Waga">{player.weight} kg</Descriptions.Item>
//         <Descriptions.Item label="Punkty">{player.points}</Descriptions.Item>
//       </Descriptions>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Divider orientation="left">Mecze zawodniczki</Divider>
//       </div>
//       <Row gutter={[16, 16]}>
//         {playerMatches.map((match) => (
//           <MatchCard key={match.id} match={match} />
//         ))}
//       </Row>
//     </div>
//   );
// }
//
// export default PlayerProfile;
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Descriptions, Avatar, Row, Divider, Spin } from "antd";
import { CustomFlagIconFactory as FlagIconFactory } from "react-flag-icon-css";
import { calculateAge } from "./utils";
import MatchCard from "./MatchCard";

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

function PlayerProfile() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const [matches, setMatches] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8765/api/player/players')
            .then(response => response.json())
            .then(data => {
                const playerData = data.find((p) => p.player_id === Number(id));
                setPlayer(playerData);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:8765/api/match/matches')
            .then(response => response.json())
            .then(data => {
                const playerMatches = data.filter((match) => match.player1.player_id === Number(id) || match.player2.player_id === Number(id));
                setMatches(playerMatches);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Spin tip="Ładowanie..." />;
    }

    if (!player) {
        return <Divider>Przykro nam, ale zawodniczka nie została znaleziona</Divider>;
    }

    return (
        <div style={{ margin: '0 auto' }}>
            <Divider>{player.first_name + " " + player.last_name}</Divider>
            <Divider><FlagIcon code={player.nationality.toLowerCase()} size={"lg"} /></Divider>
            <Descriptions
                bordered
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
                <Descriptions.Item label="Pozycja">
                    <Link to="/players">{player.ranking}</Link>
                </Descriptions.Item>
                <Descriptions.Item label="Data urodzenia">
                    {new Date(player.dateOfBirth).toLocaleDateString('pl-PL')} ({calculateAge(new Date(player.dateOfBirth))})
                </Descriptions.Item>
                <Descriptions.Item label="Wzrost">{player.height} cm</Descriptions.Item>
                <Descriptions.Item label="Waga">{player.weight} kg</Descriptions.Item>
                <Descriptions.Item label="Punkty">{player.points}</Descriptions.Item>
            </Descriptions>
            <Divider >Mecze zawodniczki:</Divider>
            <Row gutter={16} justify="center">
                {matches && matches.map((match) => (
                    <MatchCard match={match} key={match.match_id} loading={loading} />
                ))}
            </Row>
        </div>
    );
}

export default PlayerProfile;

