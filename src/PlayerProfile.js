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
    const [position, setPosition] = useState(null);
    const [matches, setMatches] = useState(null);
    const [loading, setLoading] = useState(true);
    const [winRatio, setWinRatio] = useState(null);
    const [tournaments, setTournaments] = useState(null); // Dodane nowe stan

    useEffect(() => {
        fetch('http://localhost:8765/api/player/players')
            .then(response => response.json())
            .then(data => {
                const playerData = data.find((p) => p.player_id === Number(id));
                setPlayer(playerData);

                // Sortujemy graczy wg punktów
                const sortedData = [...data].sort((a, b) => b.points - a.points);
                // Znajdujemy pozycję gracza
                const playerPosition = sortedData.findIndex((p) => p.player_id === Number(id)) + 1;
                setPosition(playerPosition);

                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:8765/api/match/matches')
            .then(response => response.json())
            .then(data => {
                const playerMatches = data.filter((match) => (match.player1.player_id === Number(id) || match.player2.player_id === Number(id)) && (match.homeScore > 0 || match.awayScore > 0));
                setMatches(playerMatches);

                const wonMatches = playerMatches.filter((match) => {
                    if (match.player1.player_id === Number(id)) {
                        return match.homeScore >= 2;
                    } else {
                        return match.awayScore >= 2;
                    }
                });

                setWinRatio(wonMatches.length / playerMatches.length);

                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:8765/api/bracket/brackets') // Dodane zapytanie do pobrania danych o turniejach
            .then(response => response.json())
            .then(data => {
                setTournaments(data);
                setLoading(false);
            });
    }, []); // Zmieniony pusty dependency array, aby zapytanie zostało wykonane tylko raz przy montowaniu komponentu

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
            <Descriptions bordered column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }} >
                <Descriptions.Item label="Pozycja">
                    <Link to="/players">{position}</Link>
                </Descriptions.Item>
                <Descriptions.Item label="Punkty">{player.points}</Descriptions.Item>
                <Descriptions.Item label="Współczynnik wygranych">{Math.round(winRatio * 100)}%</Descriptions.Item>
                <Descriptions.Item label="Data urodzenia">
                    {new Date(player.dateOfBirth).toLocaleDateString('pl-PL')} ({calculateAge(new Date(player.dateOfBirth))})
                </Descriptions.Item>
                <Descriptions.Item label="Wzrost">{player.height} cm</Descriptions.Item>
                <Descriptions.Item label="Waga">{player.weight} kg</Descriptions.Item>
            </Descriptions>
            <Divider>Mecze zawodniczki:</Divider>
            <Row gutter={16} justify="center">
                {matches &&
                    matches.map(match => {
                        const tournamentName = tournaments?.find(bracket => bracket.matches.some(m => m.match_id === match.match_id))?.tournament_name;
                        return <MatchCard match={match} key={match.match_id} tournamentName={tournamentName} loading={loading} />;
                    })}
            </Row>
        </div>
    );
}

export default PlayerProfile;
