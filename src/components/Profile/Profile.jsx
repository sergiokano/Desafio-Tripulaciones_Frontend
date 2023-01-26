import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ProfileActivity from "./ProfileActivity/ProfileActivity";
import ProfileView from "./ProfileView/ProfileView";

const Profile = () => {
    const [isView, setIsView] = useState(true);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="flex justify-center w-screen h-screen overflow-x-hidden">
            <div className="flex flex-col items-center w-full">
                <div className="relative w-5/6 flex justify-center items-center mt-2 py-5">
                    <span className="font-semibold flex justfy-center gap-2 items-center">
                        <FaRegUserCircle className="text-2xl" />
                        {user.user.username}
                    </span>
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute left-0 text-neutral-5 border border-neutral-5 rounded-full p-2 "
                    >
                        <MdArrowBackIosNew className="text-[24px]" />
                    </button>
                </div>
                <div className="w-5/6 flex bg-[#D9D9D9] rounded-[12px] leading-7 text-[17px] mt-2 mb-7">
                    <span
                        className={`flex-1 py-2 text-center font-semibold rounded-[12px] ${
                            isView
                                ? "bg-orange-1 text-white"
                                : "bg-[#D9D9D9] text-black"
                        }`}
                        onClick={() => setIsView(true)}
                    >
                        Mi actividad
                    </span>
                    <span
                        className={`flex-1 py-2 text-center font-semibold rounded-[12px] ${
                            !isView
                                ? "bg-orange-1 text-white"
                                : "bg-[#D9D9D9] text-black"
                        }`}
                        onClick={() => setIsView(false)}
                    >
                        Mi barrio
                    </span>
                </div>

                <div className="flex-1 w-full flex flex-col">
                    {isView ? <ProfileView /> : <ProfileActivity />}
                </div>
            </div>
        </div>
    );
};

export default Profile;
