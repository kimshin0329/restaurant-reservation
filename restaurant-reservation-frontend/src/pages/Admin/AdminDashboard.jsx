import { useNavigate, Link } from 'react-router-dom';
import Logo from "../../assets/images/Brand/Logo.png"
import "../Auth/Login.css"
import "../Admin/AdminDashboard.css"
import { Store, ChevronRight,Users, Headset } from 'lucide-react';
import { useEffect, useContext } from 'react';
import { MemberContext } from '../../context/MemberContext';



export default function AdminDashboard() {
    const { setMember } = useContext(MemberContext);
    const navigate = useNavigate();

    useEffect(() => {
        // 페이지 이탈 시 중단을 위한 플래그
        let cancelled = false;

        const checkAdmin = async () => {
            const token = sessionStorage.getItem("accessToken");

            // 로그인 여부 확인
            if (!token) {
                alert("로그인이 필요합니다.");
                navigate("/Login", { replace: true });
                return;
            }

            try {
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

                    throw new Error("회원 정보를 확인할 수 없습니다.");
                }

                const data = await response.json();

                if (cancelled) return;

                // 관리자 권한 확인
                if (data.role !== "ADMIN") {
                    alert("관리자만 접근할 수 있습니다.");
                    navigate("/", { replace: true });
                    return;
                }

                setMember(data);

            } catch (error) {
                if (cancelled) return;

                alert(error.message);
                sessionStorage.removeItem("accessToken");
                navigate("/Login", { replace: true });
            }
        };

        checkAdmin();

        return () => {
            cancelled = true;
        };

    }, [navigate, setMember]);




    return(
        <>
        <img className="Login-logo" src={Logo} alt= 'Logo' onClick={() => navigate("/")} />
        <h2>관리자 페이지입니다.</h2>

        <Link to="/Admin/RestaurantApplications" className="Admin-menu">
            <div className="Admin-menu-content">
                <Store size={24} />
                <div>
                    <h3>식당 등록 신청 관리</h3>
                    <p>식당 등록 신청 내역 확인 및 관리</p>
                </div>
            </div>
            <ChevronRight size={20} />
            <span>›</span>
        </Link>

    <Link to="/Admin/MemberManage" className="Admin-menu">
        <div className="Admin-menu-content">
        <Users size={24} />
            <div>
                <h3>회원 관리</h3>
                <p>회원 정보 및 계정 관리</p>
            </div>
        </div>
        <ChevronRight size={20} />
    </Link>

    <Link to="/Admin/CustomerSupport" className="Admin-menu">
    <div className="Admin-menu-content">
        <Headset size={24} />
        <div>
            <h3>고객센터 관리</h3>
            <p>고객 문의 확인 및 답변 관리</p>
        </div>
    </div>
    <ChevronRight size={20} />
</Link>
        </>
    )

}
