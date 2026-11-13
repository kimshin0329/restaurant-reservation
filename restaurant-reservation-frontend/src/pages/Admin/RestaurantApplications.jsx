
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Brand/Logo.png";
import "./RestaurantApplications.css";

export default function RestaurantApplications() {
    const navigate = useNavigate();

    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // 식당 등록 신청 목록 조회
    useEffect(() => {
        const fetchApplications = async () => {
            const token = sessionStorage.getItem("accessToken");

            if (!token) {
                navigate("/Login", { replace: true });
                return;
            }

            try {
                const response = await fetch("/api/admin/owner-applications", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("신청 목록을 불러오지 못했습니다.");
                }

                const data = await response.json();
                setApplications(data);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, [navigate]);

    // 식당 등록 신청 승인 및 거절
    const handleStatusChange = async (id, status) => {
        const token = sessionStorage.getItem("accessToken");

        try {
            const response = await fetch(`/api/admin/owner-applications/${id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status }),
            });

            if (!response.ok) {
                throw new Error("신청 상태 변경에 실패했습니다.");
            }

            // 화면에 표시된 신청 상태 변경
            setApplications((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, status } : item
                )
            );

        } catch (error) {
            setError(error.message);
        }
    };

    // 신청일 표시
    const formatDate = (date) => {
        if (!date) return "-";
        return new Date(date).toLocaleString("ko-KR");
    };

    return (
        <div className="RestaurantApplications">

            <header className="RA-header">
                <img
                    src={Logo}
                    alt="자리잡다 로고"
                    onClick={() => navigate("/")}
                />

                <button onClick={() => navigate("/AdminDashboard")}>
                    대시보드로 돌아가기
                </button>
            </header>

            <main className="RA-container">

                <h2>식당 등록 신청 관리</h2>
                <p>식당 등록 신청 내역을 확인할 수 있습니다.</p>

                <section className="RA-list">

                    <h3>식당 등록 신청 내역</h3>

                    {loading ? (
                        <p>신청 목록을 불러오는 중입니다.</p>
                    ) : error ? (
                        <p className="RA-error">{error}</p>
                    ) : applications.length === 0 ? (
                        <p>등록된 신청 내역이 없습니다.</p>
                    ) : (
                        <div className="RA-table-wrapper">
                            <table className="RA-table">
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>식당명</th>
                                        <th>대표자명</th>
                                        <th>연락처</th>
                                        <th>주소</th>
                                        <th>신청일</th>
                                        <th>상태</th>
                                        <th>관리</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {applications.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.restaurantName}</td>
                                            <td>{item.representativeName}</td>
                                            <td>{item.restaurantPhone}</td>
                                            <td>{item.restaurantAddress}</td>
                                            <td>{formatDate(item.createdAt)}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                {item.status === "PENDING" ? (
                                                    <>
                                                        <button
                                                            onClick={() => handleStatusChange(item.id, "APPROVED")}
                                                        >
                                                            승인
                                                        </button>

                                                        <button
                                                            onClick={() => handleStatusChange(item.id, "REJECTED")}
                                                        >
                                                            거절
                                                        </button>
                                                    </>
                                                ) : (
                                                    <span>처리 완료</span>
                                                )}
                                            </td>
                                        </tr>
                                                                                ))}
                                    </tbody>
                                </table>
                            </div>
        )}

            </section>

            </main>
        </div>
    );
}
