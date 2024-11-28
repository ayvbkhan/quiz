import { Outlet, useLocation } from "react-router";
import { Progress } from "../components";

export const Step = () => {
    const location = useLocation();
    const step = parseInt(location.pathname.split("/").pop()) || 1;

    return (
        <div className="container">
            <div className="wrapper">
                <Progress currentPage={step} sale={step * 5} />
                <div style={{ marginTop: "100px" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
