import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import DropdownIcon from "../../assets/svgs/DropdownIcon.svg";
import "./Header.scss";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="flex items-center justify-between w-screen p-6 text-white bg-orange-1">
            <div className="flex gap-3 items-center">
                <img src={DropdownIcon} alt="" />
                <span>Soc Campanar</span>
            </div>
            <div>
                <span>
                    <FaRegUserCircle className="text-[22px]" 
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/profile")}/>
                </span>
            </div>
        </header>
    );
};

export default Header;
