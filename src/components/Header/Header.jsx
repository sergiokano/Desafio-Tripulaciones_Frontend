/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import DropdownIcon from "../../assets/svgs/DropdownIcon.svg";
import { logout, reset } from "../../features/auth/authSlice";
import "./Header.scss";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { user, logoutSuccess } = useSelector((state) => state.auth);
    const handleLogout = () => {
        dispatch(logout());
    };

    useEffect(() => {
        dispatch(reset());
    }, []);

    useEffect(() => {
        if (logoutSuccess) {
            navigate("/");
        }
    }, [user]);

    return (
        <header className="flex items-center justify-between w-screen p-6 text-white bg-orange-1">
            <div className="flex gap-3 items-center">
                <img src={DropdownIcon} alt="" />
                <span>Soc Campanar</span>
            </div>
            <div className="flex items-center justify-center gap-4">
                {location.pathname !== "/home-map" && (
                    <span onClick={() => navigate(-1)}>
                        <MdArrowBackIosNew className="text-[20px]" />
                    </span>
                )}
                <span>
                    <FaRegUserCircle
                        className="text-[22px]"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/profile")}
                    />
                </span>
                <span>
                    <RiLogoutCircleRLine
                        className="text-[22px]"
                        style={{ cursor: "pointer" }}
                        onClick={handleLogout}
                    />
                </span>
            </div>
        </header>
    );
};

export default Header;
