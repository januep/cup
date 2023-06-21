import React, { useState, useEffect } from "react";
import { Row, Divider } from "antd";
import MatchCard from "./MatchCard";

const MatchList = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tournaments, setTournaments] = useState([]);

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
        const fetchTournaments = async () => {
            try {
                const response = await fetch('http://localhost:8765/api/bracket/brackets');
                const data = await response.json();
                setTournaments(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTournaments();
    }, []);

    const getTournamentName = (tournamentId) => {
        const tournament = tournaments.find(tournament => tournament.bracket_id === tournamentId);
        return tournament ? tournament.tournament_name : "";
    };

    const getMatchesByTournament = (tournamentId) => {
        return matches.filter(match =>
            tournaments.some(tournament =>
                tournament.bracket_id === tournamentId &&
                tournament.matches.some(t => t.match_id === match.match_id)
            )
        );
    };

    return (
        <div>
            {tournaments.map(tournament => (
                <div key={tournament.bracket_id}>
                    <Divider>{tournament.tournament_name}</Divider>
                    <Row justify="center" gutter={[16, 16]}>
                        {getMatchesByTournament(tournament.bracket_id).map(match => (
                            <MatchCard
                                key={match.match_id}
                                match={match}
                                loading={loading}
                                tournamentName={getTournamentName(tournament.bracket_id)}
                            />
                        ))}
                    </Row>
                </div>
            ))}
        </div>
    );
};

export default MatchList;