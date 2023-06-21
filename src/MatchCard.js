import React from "react";
import { Row, Col, Card, Spin } from "antd";
import FlagIconFactory from "react-flag-icon-css";
import { Link } from "react-router-dom";

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

const MatchCard = ({ match, loading, tournamentName }) => {
    const homePlayerName = `${match.player1.last_name}`;
    const awayPlayerName = `${match.player2.last_name}`;

    // Wartość początkowa źródła obrazka
    const initialImageSrc = `https://source.unsplash.com/200x100/?tennis,match${match.match_id}`;

    // Utworzenie stanu dla źródła obrazka
    const [imageSrc, setImageSrc] = React.useState(initialImageSrc);

    // Funkcja do obsługi błędów ładowania obrazka
    const handleImageError = () => {
        setImageSrc(null);
    };

    return (
        <Col key={match.match_id} xs={24} sm={12} md={8} lg={6} xl={4.5} data-aos="zoom">
            <Spin spinning={loading} size="large">
                <Card
                    title={`${match.title} - ${tournamentName}`}
                    bordered={false}
                    hoverable
                    style={{ margin: "16px 0", minHeight: '200px' }}
                >
                    {imageSrc && (
                        <img
                            onError={handleImageError}
                            alt=""
                            src={imageSrc}
                            style={{ width: '100%', borderRadius: '2px' }}
                        />
                    )}
                    <Row justify="center" style={{ marginTop: 16 }}>
                        <Col span={8} style={{ textAlign: "center" }}>
                            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`/player/${match.player1.player_id}`}>
                                <FlagIcon
                                    code={match.player1.nationality.toLowerCase()}
                                    size={"lg"}
                                    style={{ marginBottom: 10 }}
                                />
                                <span style={{ fontSize: '16px', display: 'block' }}>{homePlayerName}</span>
                            </Link>
                        </Col>
                        <Col span={8} style={{ textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <span style={{ fontSize: '20px' }}>
                                {match.homeScore} - {match.awayScore}
                            </span>
                        </Col>
                        <Col span={8} style={{ textAlign: "center" }}>
                            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`/player/${match.player2.player_id}`}>
                                <FlagIcon
                                    code={match.player2.nationality.toLowerCase()}
                                    size={"lg"}
                                    style={{ marginBottom: 10 }}
                                />
                                <span style={{ fontSize: '16px', display: 'block' }}>{awayPlayerName}</span>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            </Spin>
        </Col>
    );
};

export default MatchCard;
