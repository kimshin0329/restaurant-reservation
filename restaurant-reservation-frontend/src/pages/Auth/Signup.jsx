
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/images/Brand/Logo.png";
import "./Login.css";
import { useForm } from "react-hook-form";


export default function Signup() {
    const navigate = useNavigate();

      const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return(
<>
       <img className="Login-logo" src={Logo} alt= 'Logo' onClick={() => navigate("/")} />
              
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
            id="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요."
            {...register("nickname", { required: "닉네임을 입력해주세요." })}
            aria-invalid={errors.nickname ? "true" : "false"}
            />
            {errors.nickname && <p role="alert">{errors.nickname.message}</p>}
        </form>

    
              
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
        {errors.email && <p role="alert">{errors.email.message}</p>}
        </form>

        <form onSubmit={handleSubmit(onSubmit)}>
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
        {errors.password && <p role="alert">{errors.password.message}</p>}
            
        </form>


        <button className="login-button" type="submit" onClick={handleSubmit(onSubmit)}>회원가입</button>
        </>
    )

}
