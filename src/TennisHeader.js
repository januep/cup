// TennisHeader.js
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { ReactComponent as Logo } from "./logo.svg";

//

const TennisHeader = () => {
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
      <Menu
        style={{ background: "#3A5400" }}
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">
          <Link to="/matches">Wyniki</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/players">Ranking</Link>
        </Menu.Item>
        {/* Potrzebne na WAP: */}
        <Menu.Item key="3">
          <Link to="/manager">Menedżer</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default TennisHeader;
