import React from "react";
import IssueStep1Progress from "../../../assets/svgs/IssueStep1Progress.svg";
import TowerOvni from "../../../assets/TowerOvni.png";
import HeaderReportIssue from "../HeaderReportIssue/HeaderReportIssue";

const IssueStep1 = ({ setStep, file, setFile }) => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <HeaderReportIssue previousStep={0} setStep={setStep} />
            <div className="flex-1 bg-neutral-1 flex flex-col items-center justify-center">
                {!file && <img src={TowerOvni} alt="" className="py-2" />}
                {file && <img src={URL.createObjectURL(file)} alt="" />}
            </div>
            <div className="flex justify-center pt-10 pb-6">
                <img src={IssueStep1Progress} alt="" />
            </div>
            {!file && (
                <div className="w-full flex flex-col gap-2 justify-center items-center py-8 h-1/6">
                    <label className="w-5/6" htmlFor="post-issue-file">
                        <span className="text-white w-full text-center text-[17px] block bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5">
                            Subir imagen
                        </span>

                        <input
                            type="file"
                            id="post-issue-file"
                            accept="image/png, image/jpg, image/jpeg"
                            className="hidden"
                            onChange={(e) => {
                                setFile(e.target.files[0]);
                            }}
                        />
                    </label>
                    <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-slate-500 w-5/6 text-[17px] flex justify-center items-center gap-2 bg-white hover:bg-gray-100 border border-neutral-5 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-[12px] px-5 py-2"
                    >
                        <span
                            className="text-neutral-5 font-semibold"
                            onClick={() => setStep(2)}
                        >
                            Saltar
                        </span>
                    </button>
                </div>
            )}
            {file && (
                <div className="w-full flex flex-col gap-2 justify-center items-center py-8 h-1/6">
                    <button
                        onClick={() => setStep(2)}
                        className="text-white w-5/6 text-center text-[17px] block bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                    >
                        Siguiente
                    </button>
                    <label className="w-5/6" htmlFor="post-issue-file2">
                        <span className="text-white w-full text-center block text-[17px] bg-white hover:bg-gray-100 border border-neutral-5 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-[12px] px-5 py-2">
                            <span className="text-neutral-5 font-semibold">
                                Cambiar imagen
                            </span>
                        </span>

                        <input
                            type="file"
                            id="post-issue-file2"
                            accept="image/png, image/jpg, image/jpeg"
                            className="hidden"
                            onChange={(e) => {
                                setFile(e.target.files[0]);
                            }}
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default IssueStep1;
