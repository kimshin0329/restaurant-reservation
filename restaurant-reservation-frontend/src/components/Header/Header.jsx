import Logo from "../../assets/images/Brand/Logo.png"
import "./Header.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";



export default function Header() {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!sessionStorage.getItem("accessToken")
    );

    const handleLogout = () => {
        sessionStorage.removeItem("accessToken");
        setIsLoggedIn(false);
        navigate("/");
    }
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
            {isLoggedIn ? (
                <>
            <button onClick={() => navigate("/RestaurantApply")}>식당 등록 신청</button>

            <button onClick={handleLogout}>로그아웃</button>
            </>
            ) : (
        <>
            <button onClick={() => navigate("/login")}>로그인</button>
            <button onClick={() => navigate("/signup")}>회원가입</button>
        </>
        )}
        </div>
        
        </header>


    )
}
