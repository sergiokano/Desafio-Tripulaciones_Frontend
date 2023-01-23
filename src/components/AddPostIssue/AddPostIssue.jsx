import React, { useState } from "react";
import IssueStep1 from "./IssueStep1/IssueStep1";
import IssueStep2 from "./IssueStep2/IssueStep2";
import IssueStep4 from "./IssueStep4/IssueStep4";

const AddPostIssue = () => {
    const [step, setStep] = useState(1);
    const [file, setFile] = useState();
    return (
        <div className="h-screen w-screen">
            {step === 1 && (
                <IssueStep1 setStep={setStep} file={file} setFile={setFile} />
            )}
            {step === 2 && (
                <IssueStep2 setStep={setStep} file={file} setFile={setFile} />
            )}
            {step === 3 && (
                <IssueStep4 setStep={setStep} file={file} setFile={setFile} />
            )}
            {step === 4 && (
                <IssueStep4 setStep={setStep} file={file} setFile={setFile} />
            )}
        </div>
    );
};

export default AddPostIssue;
