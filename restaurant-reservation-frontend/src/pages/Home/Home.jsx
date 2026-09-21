import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import Main from "../../assets/images/Brand/main.png"
import { useEffect } from "react"



export default function Home() {

    

    const navigate = useNavigate();
    useEffect(() => { const token = sessionStorage.getItem("accessToken"); 
        fetch("/api/members/me", 
            { method: "GET", headers: { Authorization: `Bearer ${token}`, }, }) 
            .then(response => response.text()) .then(data => { console.log(data); }) 
            .catch(error => { console.error("Spring 연결 실패:", error); }); }, []);
    

       
    return(

        <>
    <Header />

    <main>
       <img className="main-image" src={Main} alt="main" style={{ width: "100%", height: "auto" }} />

    </main>
    
    <Footer />
    
    </>
        
    

    
    )
}