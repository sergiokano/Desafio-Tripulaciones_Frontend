import { Navigate, Outlet } from "react-router-dom";

const AuthZone = () => {
    const user = localStorage.getItem("user");

    return !user ? <Outlet /> : <Navigate to="/home-map" />;
};

export default AuthZone;
