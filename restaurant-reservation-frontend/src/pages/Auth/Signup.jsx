
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const navigate = useNavigate();

    return(
<>
        <header>
            { " \u00A0"}{ " \u00A0"}<button onClick={()=>{navigate("/");}}>MAIN</button>
        </header>
        <h1>회원가입 화면입니다.</h1>

        </>
    )

}
