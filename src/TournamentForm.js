import React, { useState, useEffect } from "react";
import { Form, Select, Button, Modal, Input, message, Divider } from "antd";
import { TrophyOutlined } from "@ant-design/icons";
import axios from 'axios';
import { CustomFlagIconFactory as FlagIconFactory } from "react-flag-icon-css";

const { Option } = Select;
const FlagIcon = FlagIconFactory(React, { useCssModules: false });

const TournamentForm = ({ onFinish }) => {
    const [selectedPlayers, setSelectedPlayers] = useState({});
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8765/api/player/players')
            .then((response) => {
                setPlayers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                message.error({
                    content: 'Błąd przy ładowaniu danych graczy!',
                });
            });
    }, []);

    const handleChange = (value, name) => {
        setSelectedPlayers((prev) => ({ ...prev, [name]: value.value }));
    };

    const filterOptions = (currentValue, option) => {
        return !Object.values(selectedPlayers).includes(option.value);
    };

    const handleFinish = (values) => {
        const { name, ...rest } = values;
        const tournamentData = {
            tournament_name: name,
            tournament_location: "GER",
            start_date: "2023-06-10",
            matches: [
                {
                    title: "Półfinał 1",
                    homeScore: 2,
                    awayScore: 1,
                    date: "2023-06-12",
                    player1_id: rest.semiFinal1Player1.value,
                    player2_id: rest.semiFinal1Player2.value,
                    supervisor_id: 1
                },
                {
                    title: "Półfinał 2",
                    homeScore: 1,
                    awayScore: 2,
                    date: "2023-06-14",
                    player1_id: rest.semiFinal2Player1.value,
                    player2_id: rest.semiFinal2Player2.value,
                    supervisor_id: 2
                },
                {
                    title: "Finał",
                    homeScore: 1,
                    awayScore: 2,
                    date: "2023-06-10",
                    player1_id: rest.semiFinal1Player1.value,
                    player2_id: rest.semiFinal2Player2.value,
                    supervisor_id: 5
                }
            ]
        };

        axios.post('http://localhost:8765/api/bracket/create', tournamentData)
            .then(() => {
                onFinish(values);
                message.success({
                    content: "Turniej został pomyślnie zapisany!",
                });
            })
            .catch((error) => {
                console.error("Error creating tournament: ", error);
                message.error({
                    content: 'Błąd podczas tworzenia turnieju!',
                });
            });
    };

    return (
        <Form name="manager" onFinish={handleFinish} autoComplete="off">
            <Divider orientation="left">
                <TrophyOutlined /> Nazwa turnieju
            </Divider>
            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Please input the tournament name!",
                    },
                ]}
            >
                <Input placeholder="Paryż WTA, ziemna" />
            </Form.Item>
            <Divider orientation="left">Pierwszy półfinał</Divider>
            <Form.Item
                name="semiFinal1Player1"
                rules={[
                    {
                        required: true,
                        message: "Please choose player 1!",
                    },
                ]}
            >
                <Select
                    labelInValue
                    placeholder="Wybierz zawodniczkę 1"
                    onChange={(value) => handleChange(value, "semiFinal1Player1")}
                    filterOption={filterOptions}
                >
                    {players.map((player) => (
                        <Option key={player.player_id} value={player.player_id}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FlagIcon size={"lg"} code={player.nationality.toLowerCase()} />
                                <span style={{ marginLeft: '8px' }}>{player.first_name} {player.last_name}</span>
                            </div>
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="semiFinal1Player2"
                rules={[
                    {
                        required: true,
                        message: "Please choose player 2!",
                    },
                ]}
            >
                <Select
                    labelInValue
                    placeholder="Wybierz zawodniczkę 2"
                    onChange={(value) => handleChange(value, "semiFinal1Player2")}
                    filterOption={filterOptions}
                >
                    {players.map((player) => (
                        <Option key={player.player_id} value={player.player_id}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FlagIcon size={"lg"} code={player.nationality.toLowerCase()} />
                                <span style={{ marginLeft: '8px' }}>{player.first_name} {player.last_name}</span>
                            </div>
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Divider orientation="left">Drugi półfinał</Divider>
            <Form.Item
                name="semiFinal2Player1"
                rules={[
                    {
                        required: true,
                        message: "Please choose player 3!",
                    },
                ]}
            >
                <Select
                    labelInValue
                    placeholder="Wybierz zawodniczkę 3"
                    onChange={(value) => handleChange(value, "semiFinal2Player1")}
                    filterOption={filterOptions}
                >
                    {players.map((player) => (
                        <Option key={player.player_id} value={player.player_id}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FlagIcon size={"lg"} code={player.nationality.toLowerCase()} />
                                <span style={{ marginLeft: '8px' }}>{player.first_name} {player.last_name}</span>
                            </div>
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="semiFinal2Player2"
                rules={[
                    {
                        required: true,
                        message: "Please choose player 4!",
                    },
                ]}
            >
                <Select
                    labelInValue
                    placeholder="Wybierz zawodniczkę 4"
                    onChange={(value) => handleChange(value, "semiFinal2Player2")}
                    filterOption={filterOptions}
                >
                    {players.map((player) => (
                        <Option key={player.player_id} value={player.player_id}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FlagIcon size={"lg"} code={player.nationality.toLowerCase()} />
                                <span style={{ marginLeft: '8px' }}>{player.first_name} {player.last_name}</span>
                            </div>
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" ghost>
                    Zapisz turniej
                </Button>
            </Form.Item>
        </Form>
    );
};

export default TournamentForm;
