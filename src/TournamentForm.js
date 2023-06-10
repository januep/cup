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
        onFinish(values);
        message.success({
            content: "Turniej został pomyślnie zapisany!",
        });
    };

    return (
        <Form name="manager" onFinish={handleFinish} autoComplete="off">
            <Divider orientation="left">
                {" "}
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
                        <Option key={player.player_id} value={player.last_name}>
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
                        <Option key={player.player_id} value={player.last_name}>
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
                        <Option key={player.player_id} value={player.last_name}>
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
                        <Option key={player.player_id} value={player.last_name}>
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



// import { Form, Input, Button, Select, DatePicker } from 'antd';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
//
// const TournamentForm = () => {
//     const [players, setPlayers] = useState([]);
//     const [form] = Form.useForm();
//     const { Option } = Select;
//
//     const fetchPlayers = async () => {
//         const result = await axios.get('/api/player/players');
//         setPlayers(result.data);
//     };
//
//     useEffect(() => {
//         fetchPlayers();
//     }, []);
//
//     const handleChange = (value, fieldName) => {
//         form.setFieldsValue({
//             [fieldName]: value,
//         });
//     };
//
//     const filterOptions = (input, option) =>
//         option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
//
//     const handleSubmit = async (values) => {
//         // Create bracket first
//         const bracketData = {
//             tournament_name: values.tournamentName,
//             tournament_location: values.tournamentLocation,
//             start_date: values.startDate,
//         };
//         const bracketRes = await axios.post('/api/bracket/add', bracketData);
//         const bracketId = bracketRes.data.bracket_id;
//
//         // Create matches for the bracket
//         const matchData = [
//             {
//                 title: 'Semi Final 1',
//                 player1_id: values.semiFinal1Player1,
//                 player2_id: values.semiFinal1Player2,
//                 bracket_id: bracketId,
//             },
//             {
//                 title: 'Semi Final 2',
//                 player1_id: values.semiFinal2Player1,
//                 player2_id: values.semiFinal2Player2,
//                 bracket_id: bracketId,
//             },
//         ];
//         for (let match of matchData) {
//             await axios.post('/api/match/add', match);
//         }
//     };
//
//     return (
//         <Form form={form} onFinish={handleSubmit} layout="vertical">
//             <Form.Item
//                 name="tournamentName"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input the tournament name!',
//                     },
//                 ]}
//             >
//                 <Input placeholder="Tournament Name" />
//             </Form.Item>
//             <Form.Item
//                 name="tournamentLocation"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input the tournament location!',
//                     },
//                 ]}
//             >
//                 <Input placeholder="Tournament Location" />
//             </Form.Item>
//             <Form.Item
//                 name="startDate"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please select the start date!',
//                     },
//                 ]}
//             >
//                 <DatePicker format="YYYY-MM-DD" />
//             </Form.Item>
//             <Form.Item
//                 name="semiFinal1Player1"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please select the first player for the first semi final!',
//                     },
//                 ]}
//             >
//                 <Select
//                     showSearch
//                     placeholder="Select a player for the first semi final"
//                     optionFilterProp="children"
//                     filterOption={filterOptions}
//                     onChange={(value) => handleChange(value, 'semiFinal1Player1')}
//                 >
//                     {players.map((player) => (
//                         <Option key={player.id} value={player.id}>
//                             {player.name}
//                         </Option>
//                     ))}
//                 </Select>
//             </Form.Item>
//             {/* Add more Form.Item for other matches and fields as necessary */}
//             <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                     Create Tournament
//                 </Button>
//             </Form.Item>
//         </Form>
//     );
// };
//
// export default TournamentForm;
