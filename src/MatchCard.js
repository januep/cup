import React from "react";
import { Row, Col, Card } from "antd";
import FlagIconFactory from "react-flag-icon-css";
import { Link } from "react-router-dom";

const FlagIcon = FlagIconFactory(React, { useCssModules: false });
//dupa
const MatchCard = ({ match }) => {
  return (
    <Col key={match.id} xs={24} sm={12} md={8} lg={6}>
      <Card title={match.title}>
        <Row>
          <Col
            span={9}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FlagIcon
              code={match.homePlayer.nationality.toLowerCase()}
              size="lg"
            />
            <Link
              style={{ color: "black" }}
              to={`/player/${match.homePlayer.id}`}
            >
              <p>{match.homePlayer.lastName}</p>
            </Link>
          </Col>

          <Col
            span={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
          >
            {match.homeScore}
          </Col>
          <Col
            span={1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
          >
            -
          </Col>

          <Col
            span={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
          >
            {match.awayScore}
          </Col>

          <Col
            span={9}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FlagIcon
              code={match.awayPlayer.nationality.toLowerCase()}
              size="lg"
            />
            <Link
              style={{ color: "black" }}
              to={`/player/${match.awayPlayer.id}`}
            >
              <p>{match.awayPlayer.lastName}</p>
            </Link>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default MatchCard;
