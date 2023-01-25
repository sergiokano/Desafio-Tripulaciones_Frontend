/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tower from "../../../assets/svgs/Tower.svg";
import { reset } from "../../../features/posts/postsSlice";

const IssueReportedSuccesfully = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset());
    }, []);

    return (
        <div className="w-screem h-screen flex flex-col">
            <form className="flex-1 flex flex-col" autoComplete="off">
                <div className="flex-1 bg-neutral-1 flex flex-col items-center">
                    <img src={Tower} alt="" className="w-10/12 mt-20" />
                    <div className="w-full flex flex-col justify-center items-center py-6">
                        <div className="py-2 justify-center">
                            <span className="font-semibold text-[28px] leading-7">
                                ¡Enhorabuena!
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center">
                        <span className="font-neutral text-[14px] ">
                            Ya está publicada y el resto de
                        </span>
                        <span className="font-neutral text-[14px]">
                            usuarios pueden validarla
                        </span>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3 justify-center items-center py-6">
                    <button
                        type="submit"
                        className="text-white w-5/6 text-[17px] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                        onClick={() => navigate("/home-map")}
                    >
                        Volver al inicio
                    </button>
                </div>
            </form>
        </div>
    );
};

export default IssueReportedSuccesfully;
