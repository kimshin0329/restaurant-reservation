import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import Main from "../../assets/images/Brand/main.png"
import { useEffect } from "react"



export default function Home() {

    useEffect(() =>{
        fetch('/api/test')
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('spring 연결 실패 :',error);
        });
    }, []);

    const navigate = useNavigate();
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