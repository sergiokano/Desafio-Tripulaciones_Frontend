import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Google from "../../assets/svgs/Google.svg";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen flex flex-col">
            <div class="flex-1 flex justify-center items-center">
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
                <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-white w-5/6 font-semibold text-[17px] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                >
                    Log In
                </button>
                <button
                    type="button"
                    class="text-slate-500 w-5/6 text-[17px] flex justify-center items-center gap-2 bg-white hover:bg-gray-100 border border-slate-500 focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold  rounded-lg px-5 py-2"
                >
                    <img src={Google} alt="" />
                    <span className="font-bold">Iniciar con Google</span>
                </button>
            </div>
        </div>
    );
};

export default Home;
