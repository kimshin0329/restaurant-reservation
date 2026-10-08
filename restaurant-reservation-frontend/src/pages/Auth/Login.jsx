import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/images/Brand/Logo.png"
import "./Login.css"
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';



export default function Login() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
const onSubmit = async (data) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
        alert("로그인에 성공했습니다.");

        sessionStorage.setItem("accessToken",result.accessToken);
        navigate("/");

    } else {
        alert(result.message);
    }
};
            

        
    


    return(
        <>
        <img className="Login-logo" src={Logo} alt= 'Logo' onClick={() => navigate("/")} />
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            {...register("email", { required: "이메일을 입력해주세요.", 
            pattern:{
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "이메일 형식이 올바르지 않습니다.",
            },
            
        })}
        aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="error-message" role="alert">{errors.email.message}</p>}

        <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", { required: "비밀번호를 입력해주세요.",
            minLength: {
                value: 8,
                message: "비밀번호는 최소 8자 이상이어야 합니다.",
            },
        })}
        aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password && <p className="error-message" role="alert">{errors.password.message}</p>}

        
        <button className="login-button" type="submit">
        로그인
    </button>
        
        <Link to="/Signup" className="signup-link">
            아직 회원이 아니신가요?
        </Link>
        </form>
        </>
    )
            

        
}
        



