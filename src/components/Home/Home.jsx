import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";


const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="flex-1 flex justify-center items-center">
                <div className="flex flex-col gap-6 items-center w-full">
                    <img src={Logo} alt="" className="w-2/5" />
                    <div className="w-full flex flex-col">
                        <span className="text-center font-bold leading-6 text-[24px]">
                            Som Barri
                        </span>
                        <span className="text-center font-bold leading-6 text-[24px]">
                            Som València
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2 justify-center items-center py-8">
                <span
                    className="text-neutral-5 text-[13px] font-semibold mb-1"
                    onClick={() => navigate("/register")}
                >
                    Registrarse
                </span>
                <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-white w-5/6 text-[17px] bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                >
                    Log In
                </button>
                
            </div>
        </div>
    );
};

export default Home;
