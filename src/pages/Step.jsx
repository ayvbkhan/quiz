import { Outlet, useLocation, useNavigate } from "react-router";
import { Progress } from "../components";

export const Step = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const step = parseInt(location.pathname.split("/").pop()) || 1;

    const handleBackClick = () => {
        if (step === 1) {
            navigate("/"); 
        } else if (step > 1) {
            navigate(`/step/${step - 1}`); 
        }
    };

    return (
        <div className="container">
            <div className="wrapper">
                <button
                    onClick={handleBackClick}
                    className="back-button"
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        position: "absolute",
                        top: "16px",
                        left: "10%",
                    }}
                >
                    <img src="/img/back.png" alt="Назад" />
                </button>

                <Progress currentPage={step} sale={step * 5} />
                <div style={{ marginTop: "100px" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
