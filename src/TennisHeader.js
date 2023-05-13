// TennisHeader.js
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

// ...

const TennisHeader = () => {
    return (
        <Layout.Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', background: '#3A5400'}}>
            <div
                style={{
                    float: 'left',
                    width: 120,
                    height: 31,
                    margin: '16px 24px 16px 0',
                    background: `url(${process.env.PUBLIC_URL + "/Tennis4U.png"})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <Menu
                style={{ background: '#3A5400' }}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key='1'>
                    <Link to="/matches">Mecze</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link to="/players">Zawodniczki</Link>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
};

export default TennisHeader;
