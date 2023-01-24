/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
    if (!state) {
        navigate("/home-map");
    }

    useEffect(() => {
        setFormData({
            ...formData,
            latitude: state.latitude,
            longitude: state.longitude,
            address: state.address,
        });
    }, []);

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
        </div>
    );
};

export default AddPostIssue;
