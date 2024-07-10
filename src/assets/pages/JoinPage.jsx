import JoinImage from '../images/regist-join-bg.png';
import '../style/JoinPage.css';

const JoinPage = () => {
    return (
        <>
            <div className="joinPage">
                <div className='head-tile'>
                    <div className='tile'>
                        <h1>Đăng ký cộng tác cùng Y Học Cộng Đồng</h1>
                    </div>

                    <div className="background-img">
                        <img src={JoinImage} alt="Logo" />
                    </div>
                </div>

            </div>


        </>
    );
};

export default JoinPage;
