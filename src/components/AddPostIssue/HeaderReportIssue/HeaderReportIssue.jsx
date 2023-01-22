import React from "react";
import { useNavigate } from "react-router";
import Back from "../../../assets/svgs/Back.svg";

const HeaderReportIssue = ({ previousStep, setStep }) => {
    const navigate = useNavigate();
    const handleBack = () => {
        switch (previousStep) {
            case 0:
                navigate("/home-map");
                break;
            case 1:
            case 2:
            case 3:
                setStep(previousStep);
                break;
            default:
                break;
        }
    };
    return (
        <header className="w-full flex gap-2 items-center justify-between py-4 px-6">
            <div onClick={handleBack}>
                <img src={Back} alt="" />
            </div>
            <span className="text-orange-1 text-[17px]">
                Reportar incidencia
            </span>
            <button
                className="py-2.5 px-3.5 text-neutral-5 bg-white hover:bg-slate-100 border border-neutral-1 rounded-[40px]"
                onClick={() => navigate("/home-map")}
            >
                Salir
            </button>
        </header>
    );
};

export default HeaderReportIssue;
