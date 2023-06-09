import React, { useState, useEffect } from 'react';
import { Divider } from "antd";

const ApiTest = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8765/api/match/matches')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            {data.map((match, index) => (
                <div key={index}>
                    <Divider orientation="left">{match.title}</Divider>
                    <p>Date: {match.date}</p>
                    <p>Home Score: {match.homeScore}</p>
                    <p>Away Score: {match.awayScore}</p>
                    <Divider orientation="left">Player 1:</Divider>
                    <p>Name: {match.player1.first_name} {match.player1.last_name}</p>
                    <p>Ranking: {match.player1.ranking}</p>
                    <Divider orientation="left">Player 2:</Divider>
                    <p>Name: {match.player2.first_name} {match.player2.last_name}</p>
                    <p>Ranking: {match.player2.ranking}</p>
                    <Divider orientation="left">Supervisor:</Divider>
                    <p>Name: {match.supervisor.supervisor_name}</p>
                    {match.bracket && (
                        <>
                            <Divider orientation="left">Bracket:</Divider>
                            <p>Tournament Name: {match.bracket.tournament_name}</p>
                            <p>Location: {match.bracket.tournament_location}</p>
                            <p>Start Date: {match.bracket.start_date}</p>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ApiTest;
