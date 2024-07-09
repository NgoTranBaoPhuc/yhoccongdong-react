
import { Link } from 'react-router-dom';
import { Layout, Menu, Input, Button } from 'antd';
import { SearchOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../images/logo.png';

const { Header } = Layout;

function CustomHeader() {
    return (
        <Header className="header" style={{ backgroundColor: 'white', padding: '0 50px' }}>
            <div className="logo" style={{ float: 'left', marginRight: '20px' }}>
                <img src={logo} alt="Logo" style={{ height: '40px' }} />
            </div>
            <Input
                placeholder="Tìm kiếm trong y học cộng đồng"
                prefix={<SearchOutlined />}
                style={{ width: '300px', marginRight: '20px' }}
            />
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ flexGrow: 1 }}>
                <Menu.Item key="1">
                    <Link to="/">Y HỌC CỘNG ĐỒNG</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/projects">DỰ ÁN</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/library">TỦ SÁCH</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/join">ĐĂNG KÝ THAM GIA</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/contact">LIÊN HỆ</Link>
                </Menu.Item>
            </Menu>
            <Button type="primary" icon={<UserOutlined />} style={{ marginRight: '10px' }}>
                Đăng Nhập
            </Button>
            <Button type="primary" icon={<HeartOutlined />} style={{ backgroundColor: 'green', borderColor: 'green' }}>
                Quyên Góp
            </Button>
        </Header>
    );
}

export default CustomHeader;
