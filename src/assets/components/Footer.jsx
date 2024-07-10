
import '../style/Footer.css';
import logo from '../images/logo.png';
import fbIcon from '../images/fb.png';
import instaIcon from '../images/insta.png';
import ytbIcon from '../images/ytb.png';
import mailIcon from '../images/gg-member.png';

const Footer = () => {
    return (
        <div className='footer' >
            <div className="footer-container">
                <div className="footer-logo">
                    <div className="footer_logo">
                        <a href="https://yhoccongdong.com/">
                            <img src={logo} alt="Y Học Cộng Đồng" />
                        </a>
                    </div>
                    <div className="footer_copyright">
                        © Copyright 2023 Yhoccongdong.com | Developed by <a href="https://amitgroup.vn">AMIT Group</a>
                    </div>
                </div>

                <div className="footer_introduce">
                    <div className="footer_introduce-title color-linear">
                        Giới thiệu
                    </div>
                    <div className="footer_introduce-content">
                        <p>Tổ chức phi lợi nhuận về giáo dục sức khoẻ.<br />
                            Nơi kết nối Bác sĩ và Cộng đồng.</p>
                    </div>
                </div>

                <div className="footer_contact">
                    <div className="footer_contact-title color-linear">
                        Liên hệ
                    </div>
                    <div className="footer_contact-email">
                        <img src={mailIcon} alt="mail" />
                        yhoccongdong@gmail.com
                    </div>
                    <div className="footer_contact-icon">
                        <a href="https://www.facebook.com/yhoccongdong" target="_blank" rel="noreferrer">
                            <img src={fbIcon} alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/yhoccongdong/" target="_blank" rel="noreferrer">
                            <img src={instaIcon} alt="instagram" />
                        </a>
                        <a href="https://www.youtube.com/c/yhoccongdong" target="_blank" rel="noreferrer">
                            <img src={ytbIcon} alt="youtube" />
                        </a>
                    </div>
                </div>
            </div>
            {/* <button className="footer_totop show" id="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <i className="fa fa-thin fa-up-long"></i>
            </button> */}

        </div>
    );
};

export default Footer;
