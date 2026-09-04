import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import Main from "../../assets/images/Brand/main.png"




export default function Home() {

    const navigate = useNavigate();
    return(

        <>
    <Header />

    <main>
       <img className="main-image" src={Main} alt="main" style={{ width: "80%", height: "auto" }} />

    </main>
    
    <Footer />
    
    </>
        
    

    
    )
}