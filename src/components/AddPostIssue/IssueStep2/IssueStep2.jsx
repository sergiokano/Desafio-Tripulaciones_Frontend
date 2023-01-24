import React from "react";
import IssueStep2Progress from "../../../assets/svgs/IssueStep2Progress.svg";
import Search from "../../../assets/svgs/Search.svg";
import { subCategoriesDetailSwitch } from "../../../utils/subCategoriesDetailSwitch";
import { subCategoriesSwitch } from "../../../utils/subCategoriesSwitch";
import HeaderReportIssue from "../HeaderReportIssue/HeaderReportIssue";

const IssueStep2 = ({ setStep, formData, setFormData }) => {
    return (
        <div className="w-screen h-screen flex flex-col overflow-auto">
            <HeaderReportIssue previousStep={1} setStep={setStep} />
            <div className="flex-1 bg-neutral-1 flex flex-col items-center">
                <div className="w-full flex gap-3 items-center text-white bg-blue-3 p-6">
                    <div>
                        <img src={Search} alt="" className="w-8" />
                    </div>
                    <span className="text-sm">
                        Busca el tipo concreto de incidencia usando los
                        desplegables de abajo
                    </span>
                </div>
                <div className="w-5/6 my-3 flex-1 flex flex-col justify-center gap-6">
                    {/* First Select */}
                    <div>
                        <label
                            htmlFor="categories"
                            className="block mb-2 text-sm text-gray-900 font-semibold"
                        >
                            Categoría
                        </label>
                        <select
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    subCategory: "",
                                    subCategoryDetail: "",
                                    category: e.target.value,
                                })
                            }
                            id="categories"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="" defaultValue>
                                Elige categoría
                            </option>
                            <option value="1">Jardinería</option>
                            <option value="2">Movilidad sostenible</option>
                            <option value="3">Sanidad</option>
                            <option value="4">Alumbrado</option>
                            <option value="5">
                                Residuos Urbanos y Limpieza
                            </option>
                            <option value="6">Otros</option>
                        </select>
                    </div>
                    {/* Second Select */}
                    <div>
                        <label
                            htmlFor="subCategories"
                            className="block mb-2 text-sm text-gray-900 font-semibold"
                        >
                            Subcategoría
                        </label>
                        <select
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    subCategoryDetail: "",
                                    subCategory: e.target.value,
                                })
                            }
                            disabled={formData.category === ""}
                            id="subCategories"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            {formData.category === "" ? (
                                <option value="" defaultValue>
                                    Elige subcategoría
                                </option>
                            ) : (
                                subCategoriesSwitch(formData.category)
                            )}
                        </select>
                    </div>
                    {/* Thir Select */}
                    <div>
                        <label
                            htmlFor="subCategoriesDetail"
                            className="block mb-2 text-sm text-gray-900 font-semibold"
                        >
                            Subcategoría específica
                        </label>
                        <select
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    subCategoryDetail: e.target.value,
                                })
                            }
                            disabled={formData.subCategory === ""}
                            id="subCategoriesDetail"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            {formData.subCategory === "" ? (
                                <option value="" defaultValue>
                                    Elige subcategoría especifíca
                                </option>
                            ) : (
                                subCategoriesDetailSwitch(
                                    formData.category,
                                    formData.subCategory
                                )
                            )}
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-10 pb-6">
                <img src={IssueStep2Progress} alt="" />
            </div>
            <div className="w-full flex flex-col gap-2 justify-center items-center py-8 h-1/6">
                <button
                    onClick={() => setStep(3)}
                    disabled={formData.subCategoryDetail === ""}
                    className="text-white w-5/6 text-center disabled:opacity-70 text-[17px] block bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default IssueStep2;
