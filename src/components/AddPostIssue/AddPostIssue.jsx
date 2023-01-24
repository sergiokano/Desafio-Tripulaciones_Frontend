/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IssueReportedSuccesfully from "./IssueReportedSuccesfully/IssueReportedSuccesfully";
import IssueStep1 from "./IssueStep1/IssueStep1";
import IssueStep2 from "./IssueStep2/IssueStep2";
import IssueStep3 from "./IssueStep3/IssueStep3";
import IssueStep4 from "./IssueStep4/IssueStep4";

const AddPostIssue = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [file, setFile] = useState();
    const [formData, setFormData] = useState({
        category: "",
        subCategory: "",
        subCategoryDetail: "",
        desc: "",
        title: "",
        longitude: null,
        latitude: null,
        address: "",
    });

    useEffect(() => {
        if (state) {
            setFormData({
                ...formData,
                latitude: state.latitude,
                longitude: state.longitude,
                address: state.address,
            });
        }
    }, []);

    if (!state) {
        return (
            <div className="h-screen w-screen flex flex-col gap-6 items-center justify-center">
                <span className="w-3/4 text-center font-semibold text-[26px]">
                    Ups! Algo no ha ocurrido como se esperaba
                </span>
                <button
                    onClick={() => navigate("/home-map")}
                    className="text-white w-1/4 text-center text-[17px] block bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                >
                    Volver
                </button>
            </div>
        );
    }

    return (
        <div className="h-screen w-screen">
            {step === 1 && (
                <IssueStep1
                    setStep={setStep}
                    file={file}
                    setFile={setFile}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {step === 2 && (
                <IssueStep2
                    setStep={setStep}
                    file={file}
                    setFile={setFile}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {step === 3 && (
                <IssueStep3
                    setStep={setStep}
                    file={file}
                    setFile={setFile}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {step === 4 && (
                <IssueStep4
                    setStep={setStep}
                    file={file}
                    setFile={setFile}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {step === 5 && (
                <IssueReportedSuccesfully
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
        </div>
    );
};

export default AddPostIssue;
