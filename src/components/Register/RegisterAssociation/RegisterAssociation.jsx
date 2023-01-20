import React, { useState } from "react";
import { FaRegUserCircle, FaUserFriends } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";

const RegisterAssociation = () => {
    const [formData, setFormData] = useState({
        username: "",
        cif: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const { username, cif, email, password, confirmPassword } = formData;

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex-1 flex flex-col">
            <form
                className="flex-1 flex flex-col items-center"
                onSubmit={onSubmit}
            >
                <div className="flex-1 flex flex-col items-center gap-3 bg-neutral-1 py-4 w-full">
                    <div className="w-5/6">
                        <label
                            htmlFor="associationUser"
                            className="block mb-2 text-xs font-bold text-gray-900"
                        >
                            Nombre de usuario
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaRegUserCircle className="text-slate-500 text-lg" />
                            </div>
                            <input
                                type="text"
                                id="associationUser"
                                name="username"
                                value={username}
                                onChange={onChange}
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="Ejemplo"
                            />
                        </div>
                    </div>
                    <div className="w-5/6">
                        <label
                            htmlFor="associationCif"
                            className="block mb-2 text-xs font-bold text-gray-900"
                        >
                            CIF
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaUserFriends className="text-slate-500 text-lg" />
                            </div>
                            <input
                                type="text"
                                id="associationCif"
                                name="cif"
                                value={cif}
                                onChange={onChange}
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="CIF asociación"
                            />
                        </div>
                    </div>
                    <div className="w-5/6">
                        <label
                            htmlFor="associationMail"
                            className="block mb-2 text-xs font-bold text-gray-900"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <HiOutlineMail className="text-slate-500 text-lg" />
                            </div>
                            <input
                                type="text"
                                id="associationMail"
                                name="email"
                                value={email}
                                onChange={onChange}
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="Ejemplo@gmail.com"
                            />
                        </div>
                    </div>
                    <div className="w-5/6">
                        <label
                            htmlFor="associationPwd"
                            className="block mb-2 text-xs font-bold text-gray-900"
                        >
                            Contraseña
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <MdPassword className="text-slate-500 text-lg" />
                            </div>
                            <input
                                type="password"
                                id="associationPwd"
                                name="password"
                                value={password}
                                onChange={onChange}
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="Contraseña"
                            />
                        </div>
                    </div>
                    <div className="w-5/6">
                        <label
                            htmlFor="associationPwd2"
                            className="block mb-2 text-xs font-bold text-gray-900"
                        >
                            Confirmar contraseña
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <MdPassword className="text-slate-500 text-lg" />
                            </div>
                            <input
                                type="password"
                                id="associationPwd2"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={onChange}
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="Contraseña"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-5/6">
                    <button
                        type="submit"
                        className="text-white w-full my-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-[12px] text-sm p-2.5"
                    >
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterAssociation;
