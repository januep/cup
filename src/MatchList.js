// import React from "react";
// import { Row, Divider } from "antd";
// import MatchCard from "./MatchCard";
// import matches from "./matches.json";
// import players from "./players.json";
//
// const MatchList = () => {
//   const displayMatches = matches.map((match) => {
//     const homePlayer = players.find((player) => player.id === match.homeId);
//     const awayPlayer = players.find((player) => player.id === match.awayId);
//
//     return { ...match, homePlayer, awayPlayer };
//   });
//
//   return (
//     <div>
//       <Divider orientation="left">Rzym WTA, ziemna</Divider>
//       <Row gutter={[16, 16]}>
//         {displayMatches.map((match) => (
//           <MatchCard key={match.id} match={match} />
//         ))}
//       </Row>
//     </div>
//   );
// };
//
// export default MatchList;

import React, { useState, useEffect } from "react";
import { Row, Divider } from "antd";
import MatchCard from "./MatchCard";

const MatchList = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8765/api/match/matches')
            .then(response => response.json())
            .then(data => {
                const displayMatches = data.map((match) => {
                    const homePlayer = match.player1;
                    const awayPlayer = match.player2;

                    return { ...match, homePlayer, awayPlayer };
                });
                setMatches(displayMatches);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Divider orientation="left">Niedawno rozegrane:</Divider>
            <Row gutter={[16, 16]}>
                {matches.map((match) => (
                    <MatchCard key={match.match_id} match={match} loading={loading} />
                ))}
            </Row>
        </div>
    );
};

export default MatchList;

