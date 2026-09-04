import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-logo">
                    자리잡다
                </div>

                <p className="footer-description">
                    맛있는 경험을 위한 예약, 자리잡다.
                </p>

                <div className="footer-links">
                    <a href="#">이용약관</a>
                    <a href="#">개인정보처리방침</a>
                    <a href="#">고객센터</a>
                    <a href="#">문의하기</a>
                </div>

                <p className="copyright">
                    © 2026 자리잡다. All rights reserved.
                </p>

            </div>
        </footer>
    );
}

export default Footer;