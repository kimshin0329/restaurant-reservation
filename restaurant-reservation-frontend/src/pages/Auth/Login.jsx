import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();

    return(
        <>
        <header>
            { " \u00A0"}{ " \u00A0"}<button onClick={()=>{navigate("/")}}>MAIN</button>
        </header>
        <h1>로그인 화면입니다.</h1>

        </>

        
    )

}
