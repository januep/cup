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
                setMatches(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const fetchTournamentNames = async () => {
            try {
                const response = await fetch('http://localhost:8765/api/bracket/brackets');
                const brackets = await response.json();

                const matchesWithTournamentName = matches.map(match => {
                    const bracket = brackets.find(bracket => bracket.matches.some(m => m.match_id === match.match_id));
                    const tournamentName = bracket ? bracket.tournament_name : '';
                    return { ...match, tournamentName };
                });

                setMatches(matchesWithTournamentName);
            } catch (error) {
                console.error(error);
            }
        };

        if (matches.length > 0 && !matches[0].hasOwnProperty('tournamentName')) {
            fetchTournamentNames();
        }
    }, [matches]);

    return (
        <div>
            <Divider orientation="left">Niedawno rozegrane:</Divider>
            <Row gutter={[16, 16]}>
                {matches.map((match) => (
                    <MatchCard key={match.match_id} match={match} loading={loading} tournamentName={match.tournamentName} />
                ))}
            </Row>
        </div>
    );
};

export default MatchList;
