import React from "react";
import IssueStep3Progress from "../../../assets/svgs/IssueStep3Progress.svg";
import Note from "../../../assets/svgs/Note.svg";
import Text from "../../../assets/svgs/Text.svg";
import HeaderReportIssue from "../HeaderReportIssue/HeaderReportIssue";

const IssueStep3 = ({ setStep, formData, setFormData }) => {
    return (
        <div className="w-screen h-screen flex flex-col overflow-auto">
            <HeaderReportIssue previousStep={2} setStep={setStep} />
            <div className="flex-1 bg-neutral-1 flex flex-col">
                <div className="flex justify-center py-5 border-b border-neutral-2">
                    <div className="w-5/6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img src={Text} alt="" />
                            </div>
                            <input
                                type="text"
                                id="titleIssue"
                                name="title"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        title: e.target.value,
                                    })
                                }
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="Nombre"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center py-9">
                    <div className="w-5/6 relative">
                        <div className="absolute left-0 top-0 flex items-center mt-3 pl-3 pointer-events-none">
                            <img src={Note} alt="" />
                        </div>
                        <textarea
                            id="desc"
                            value={formData.desc}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    desc: e.target.value,
                                })
                            }
                            class="block resize-none bg-neutral-2 h-full pl-10 p-2.5 w-full outline-0 border-gray-300 focus:ring-orange-2 text-base text-gray-900 rounded-[12px] border"
                            placeholder="Describe la incidencia"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-10 pb-6">
                <img src={IssueStep3Progress} alt="" />
            </div>
            <div className="w-full flex flex-col gap-2 justify-center items-center py-8 h-1/6">
                <button
                    onClick={() => setStep(4)}
                    disabled={formData.title === "" || formData.desc === ""}
                    className="text-white w-5/6 text-center disabled:opacity-70 text-[17px] block bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default IssueStep3;
