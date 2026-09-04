import Logo from "../../assets/images/Brand/Logo.png"
import "./Header.css"
import { useNavigate } from "react-router-dom"



export default function Header() {
    const navigate = useNavigate();
    return (
        
        <header>
         <nav>
        <img className="logo" src={Logo} alt= 'Logo' onClick={() => navigate("/")} />
       
            <button onClick={() => navigate("/")}>홈</button>
            <button onClick={() => navigate("/")}>레스토랑</button> 
            <button onClick={() => navigate("/")}>예약하기</button>
            <button onClick={() => navigate("/")}>마이페이지</button> 
            <button onClick={() => navigate("/")}>고객센터</button> 
        
        
        </nav>
        
        <div className="header-right">
            <button onClick={() => navigate("/login")}>로그인</button>
            <button onClick={() => navigate("/signup")}>회원가입</button>
        </div>
        
        </header>


    )
}
