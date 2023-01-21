import React, { useState } from "react";
import RegisterAssociation from "./RegisterAssociation/RegisterAssociation";
import RegisterNeighbour from "./RegisterNeighbour/RegisterNeighbour";

const Register = () => {
    const [isNeighbour, setIsNeighbour] = useState(true);
    return (
        <div className="flex justify-center w-screen h-screen">
            <div className="flex flex-col items-center w-full">
                <div className="w-5/6 flex bg-[#D9D9D9] rounded-[12px] leading-7 text-[17px] my-7">
                    <span
                        className={`flex-1 py-2 text-center font-semibold rounded-[12px] ${
                            isNeighbour
                                ? "bg-orange-1 text-white"
                                : "bg-[#D9D9D9] text-black"
                        }`}
                        onClick={() => setIsNeighbour(true)}
                    >
                        Vecino
                    </span>
                    <span
                        className={`flex-1 py-2 text-center font-semibold rounded-[12px] ${
                            !isNeighbour
                                ? "bg-orange-1 text-white"
                                : "bg-[#D9D9D9] text-black"
                        }`}
                        onClick={() => setIsNeighbour(false)}
                    >
                        AAVV
                    </span>
                </div>
                <div className="w-5/6 my-6">
                    <span className="font-semibold leading-6 text-[20px]">
                        Introduce tus datos
                    </span>
                </div>
                <div className="flex-1 w-full flex flex-col">
                    {isNeighbour ? (
                        <RegisterNeighbour />
                    ) : (
                        <RegisterAssociation />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Register;
