import React, { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";

const RegisterNeighbour = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthdate: "",
    });

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const { username, email, password, confirmPassword, birthdate } = formData;

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
                            htmlFor="neighbourUser"
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
                                id="neighbourUser"
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
                            htmlFor="neighbourMail"
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
                                id="neighbourMail"
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
                            htmlFor="neighbourPwd"
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
                                id="neighbourPwd"
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
                            htmlFor="neighbourPwd2"
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
                                id="neighbourPwd2"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={onChange}
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="Contraseña"
                            />
                        </div>
                    </div>
                    <div className="w-5/6">
                        <label
                            htmlFor="neighbourbBirthdate"
                            className="block mb-2 text-xs font-bold text-gray-900"
                        >
                            Fecha de nacimiento
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <BsCalendar3 className="text-slate-500 text-lg" />
                            </div>
                            <input
                                type="text"
                                id="neighbourBirthdate"
                                name="birthdate"
                                value={birthdate}
                                onChange={onChange}
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="Ej: 13/01/1990"
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

export default RegisterNeighbour;
