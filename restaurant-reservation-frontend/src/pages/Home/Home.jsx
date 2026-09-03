import { useNavigate } from "react-router-dom"





export default function Home() {

    const navigate = useNavigate();
    return(

        <>
    <header>
        <h1>자리잡다</h1>
    </header>

    <main>
        { " \u00A0"}{ " \u00A0"}<button onClick={()=>{navigate("/")}}>MAIN</button>
        { " \u00A0"}{ " \u00A0"}<button onClick={()=>{navigate("/Login")}}>Login</button>
        { " \u00A0"}{ " \u00A0"}<button onClick={()=>{navigate("/Signup")}}>Signup</button>

    </main>
    
    <footer>푸터입니다.</footer>
    
    </>
        
    

    
    )
}