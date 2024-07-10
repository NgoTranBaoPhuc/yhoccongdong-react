import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';
import logo from '../images/logo.png';
import '../style/CustomHeader.css';

function CustomHeader() {
    const [category, setCategories] = useState([
        {
            name: "Y HỌC CỘNG ĐỒNG",
            link: "/y-hoc-cung-dong"
        },
        {
            name: "DỰ ÁN",
            link: "/du-an"
        },
        {
            name: "TỦ SÁCH",
            link: "/tu-sach"
        },
        {
            name: "ĐĂNG KÝ THAM GIA",
            link: "/dang-ky-tham-gia"
        },
        {
            name: "LIÊN HỆ",
            link: "/lien-he"
        }
    ]);

    return (
        <>
            <div className="header-container">
                <div className="top-bar">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <Input
                        className="search-bar"
                        placeholder="Tìm kiếm trong y học cộng đồng"
                        prefix={<SearchOutlined />}
                    />
                    <div className="auth-buttons">
                        <Button className="custom-button" type="primary" >
                            ĐĂNG NHẬP
                        </Button>
                        <Button className="custom-button" type="primary" icon={<HeartOutlined />}>
                            QUÊN GÓP
                        </Button>
                    </div>
                </div>
                <nav className="nav-menu">
                    {
                        category && category.length > 0 && (
                            category.map((item, index) => {
                                const isActive = location.pathname === item.link;
                                return (
                                    <Link key={index} to={item.link} className={isActive ? 'active' : ''}>{item.name}</Link>
                                )
                            })
                        )
                    }
                </nav>
            </div>

            <div style={{ paddingTop: '120px' }}></div>
        </>
    );
}

export default CustomHeader;
