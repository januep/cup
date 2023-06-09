import { Link } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { ReactComponent as Logo } from "./logo.svg";
import { useEffect } from "react";

const TennisHeader = ({ isLoggedIn, isAdmin, onLogout }) => {
  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
    console.log("isAdmin:", isAdmin);
  }, [isLoggedIn, isAdmin]);
  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 2,
        width: "100%",
        background: "#3A5400",
      }}
    >
      <Link to="/">
        <Logo
          style={{
            float: "left",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
          }}
        />
      </Link>
      <Menu style={{ background: "#3A5400" }} theme="dark" mode="horizontal">
        {isLoggedIn && (
          <Menu.Item key="1">
            <Link to="/matches">Wyniki</Link>
          </Menu.Item>
        )}
        {isLoggedIn && (
          <Menu.Item key="2">
            <Link to="/players">Ranking</Link>
          </Menu.Item>
        )}
        {isLoggedIn && isAdmin && (
          <Menu.Item key="3">
            <Link to="/manager">Menedżer</Link>
          </Menu.Item>
        )}
          {isLoggedIn && (
              <Menu.Item key="4">
                  <Link to="/apitest">Api Test</Link>
              </Menu.Item>
          )}
        {isLoggedIn && (
          <Button
            icon={<LogoutOutlined />}
            ghost
            onClick={onLogout}
            style={{
              position: "absolute",
              right: 10,
              top: 15,
              borderColor: "#91d400",
              color: "#91d400",
            }}
          />
        )}
      </Menu>
    </Layout.Header>
  );
};

export default TennisHeader;
