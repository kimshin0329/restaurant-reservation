
import { useContext,useState, useEffect } from "react";
import { MemberContext } from "../../context/MemberContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Brand/Logo.png";
import { useForm } from "react-hook-form";
import "./RestaurantApply.css";





export default function RestaurantApply() {

    const { member, setMember } = useContext(MemberContext);

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {
    const fetchMember = async () => {
        setIsLoading(true);
        setError("");

        try {
            const token = sessionStorage.getItem("accessToken");

            if (!token) {
                throw new Error("로그인이 필요합니다. 다시 로그인해 주세요.");
            }

            const response = await fetch("/api/members/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("로그인이 만료되었습니다. 다시 로그인해 주세요.");
                }

                throw new Error("회원 정보를 불러오지 못했습니다.");
            }

            const data = await response.json();

            setMember(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

        fetchMember();
    }, [setMember]);
   

    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();


    const onSubmit = async (data) => {
        try{

            const token = sessionStorage.getItem("accessToken");

            if(!token){
                throw new Error("로그인이 필요합니다. 다시 로그인해 주세요.");

            }
            const response = await fetch('/api/owner-applications',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,

                },
                body: JSON.stringify(data),
            });
            if (!response.ok){
                if(response.status === 401){
                    throw new Error("로그인이 만료되었습니다. 다시 로그인해 주세요.");

                }
                throw new Error("식당 등록 신청에 실패했습니다.");
            }

            setError("");
            alert("식당 등록 신청이 완료되었습니다.");
            navigate("/");
        } catch(err){
            setError(err.message);
        }
        
};

return(
    <>

    <img className="RestaurantApply-logo" src={Logo} alt= 'Logo' onClick={() => navigate("/")} />
    

    
    <form onSubmit={handleSubmit(onSubmit)}>

     <label className = "form-label" htmlFor="restaurantName">식당 이름</label>

        <input
            id="restaurantName"
            type="text"
            placeholder="식당 이름을 입력하세요."
            {...register("restaurantName", {
                required: "식당 이름을 입력해주세요.",
                maxLength: {
                    value: 50,
                    message: "식당 이름은 최대 50자 이하로 입력해주세요.",
                },
            })}
        />
        {errors.restaurantName && (
        <p className="error-message" role="alert">{errors.restaurantName.message}</p>
        )}
        
        <label className="form-label" htmlFor="representativeName">대표자명(수정불가)</label>

        <input
            id="representativeName"
            type="text"
            value={member?.name ?? ""}
            readOnly
        />

        {isLoading && <p>회원 정보를 불러오는 중입니다.</p>}

        {error && <p className="error-message">{error}</p>}
        

    
        

        <label className="form-label"htmlFor="restaurantPhone">연락처</label>

        <input
            id="restaurantPhone"
            type="tel"
            placeholder="연락처를 입력하세요."
            {...register("restaurantPhone", {
                required: "연락처를 입력해주세요.",
                pattern: {
                value: /^01[016789]-?\d{3,4}-?\d{4}$/,
                message: "연락처는 숫자와 -만 입력해주세요."
                },
            })}
            
        />
        {errors.restaurantPhone && (
            <p className="error-message" role="alert">{errors.restaurantPhone.message}</p>
        )}
        <label className="form-label" htmlFor="restaurantAddress">식당 주소</label>

        <input
            id="restaurantAddress"
            type="text"
            placeholder="식당 주소를 입력하세요."
            {...register("restaurantAddress", {
                required: "식당 주소를 입력해주세요.",
            })}
        />

        {errors.restaurantAddress && (
            <p className="error-message" role="alert">
                {errors.restaurantAddress.message}
            </p>
        )}
        
        

        <button className="RestaurantApply-button" type="submit">
            신청하기
        </button>   

        </form>

        </>

)


}