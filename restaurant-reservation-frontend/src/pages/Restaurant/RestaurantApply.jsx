import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Brand/Logo.png";
import { useForm } from "react-hook-form";
import "./RestaurantApply.css";





export default function RestaurantApply() {

    const navigate = useNavigate();

    const memberName = "김신";

    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();


    const onSubmit = (data) => {
        console.log(data);
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
        <label className="form-label" htmlFor="representativeName">대표자명(수정불가)</label>

        <input
            id="representativeName"
            type="text"
            value={memberName}
            readOnly
        />

    {errors.restaurantName && (
        <p className="error-message" role="alert">{errors.restaurantName.message}</p>
        )}
        

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