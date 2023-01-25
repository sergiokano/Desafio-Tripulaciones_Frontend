/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
    FaExclamationCircle,
    FaRegUserCircle,
    FaUserCircle,
    FaUserFriends,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Phone from "../../../assets/svgs/Phone.svg";
import PhoneWhite from "../../../assets/svgs/PhoneWhite.svg";
import Text from "../../../assets/svgs/Text.svg";
import TextWhite from "../../../assets/svgs/TextWhite.svg";
import { registerAssociation, reset } from "../../../features/auth/authSlice";

const RegisterAssociation = () => {
    const [checked, setChecked] = useState(false);
    const [checkedTerms, setCheckedTerms] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        cif: "",
        email: "",
        password: "",
        password2: "",
        firstName: "",
        lastName: "",
        phone: "",
    });

    const handleCheckedChange = () => {
        if (isError) {
            dispatch(reset());
        }
        setChecked(!checked);
    };
    const handleCheckedTerms= () => {
        if (isError) {
            dispatch(reset());
        }
        setCheckedTerms(!checkedTerms);
    };

    const {
        username,
        cif,
        email,
        password,
        password2,
        firstName,
        lastName,
        phone,
    } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isSuccess, isError, errorMessage, errorIcon } = useSelector(
        (state) => state.auth
    );
    useEffect(() => {
        dispatch(reset());
    }, []);

    useEffect(() => {
        if (isSuccess) {
            dispatch(reset());
            navigate("/registerSuccess");
        }
    }, [isSuccess]);

    const onChange = (e) => {
        if (isError) {
            dispatch(reset());
        }
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(registerAssociation({ ...formData, checked,checkedTerms }));
    };

    return (
        <div className="flex-1 flex flex-col">
            <form
                className="flex-1 flex flex-col items-center"
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <div className="flex-1 flex flex-col items-center gap-2 bg-neutral-1 py-4 w-full">
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
                                name="password2"
                                value={password2}
                                onChange={onChange}
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="Contraseña"
                            />
                        </div>
                    </div>
                    <div className="w-5/6">
                        <label
                            htmlFor="associationFirstName"
                            className="block mb-2 text-xs font-bold text-gray-900"
                        >
                            Nombre persona responsable
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img src={Text} alt="" />
                            </div>
                            <input
                                type="text"
                                id="neighbourFirstName"
                                name="firstName"
                                value={firstName}
                                onChange={onChange}
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="Nombre"
                            />
                        </div>
                    </div>
                    <div className="w-5/6">
                        <label
                            htmlFor="associationLastName"
                            className="block mb-2 text-xs font-bold text-gray-900"
                        >
                            Apellidos persona responsable
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img src={Text} alt="" />
                            </div>
                            <input
                                type="text"
                                id="neighbourLastName"
                                name="lastName"
                                value={lastName}
                                onChange={onChange}
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="Apellidos"
                            />
                        </div>
                    </div>
                    <div className="w-5/6">
                        <label
                            htmlFor="associationPhone"
                            className="block mb-2 text-xs font-bold text-gray-900"
                        >
                            Teléfono
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img src={Phone} alt="" />
                            </div>
                            <input
                                type="text"
                                id="neighbourPhone"
                                name="phone"
                                value={phone}
                                onChange={onChange}
                                className="bg-neutral-2 border outline-0 border-gray-300 focus:ring-orange-2 focus:ring-2 text-gray-900 text-base rounded-[12px] block w-full pl-10 p-2"
                                placeholder="Teléfono"
                            />
                        </div>
                    </div>
                    <div className="flex items-center w-5/6 py-8">
                        <input
                            checked={checked}
                            onChange={handleCheckedChange}
                            id="checked-checkbox2"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 accent-orange-1 p-1 text-white border-gray-300"
                        />
                        <label
                            htmlFor="checked-checkbox2"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Aceptar política de privacidad de datos
                        </label>
                    </div>
                    <div className="flex items-center w-5/6 py-8">
                        <input
                            checked={checkedTerms}
                            onChange={handleCheckedTerms}
                            id="checked-checkbox2"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 accent-orange-1 p-1 text-white border-gray-300"
                        />
                        <label
                            htmlFor="checked-checkbox2"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Aceptar los términos y condiciones
                        </label>
                    </div>

                    <div
                        className="w-full bg-orange-1 py-4 px-6 flex items-center gap-4 text-white"
                        style={{ display: errorIcon ? "block" : "none" }}
                    >
                        <div className="flex items-center">
                            <div className="mr-2">
                                {errorIcon === "firstName" && (
                                    <img src={TextWhite} alt="" />
                                )}
                                {errorIcon === "lastName" && (
                                    <img src={TextWhite} alt="" />
                                )}
                                {errorIcon === "phone" && (
                                    <img src={PhoneWhite} alt="" />
                                )}
                                {errorIcon === "username" && <FaUserCircle />}
                                {errorIcon === "email" && <HiOutlineMail />}
                                {errorIcon === "password" && <MdPassword />}
                                {errorIcon === "password2" && <MdPassword />}
                                {errorIcon === "cif" && <FaUserFriends />}
                                {errorIcon === "checked" && (
                                    <FaExclamationCircle />
                                )}
                            </div>
                            <span className="text-sm">{errorMessage}</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3 justify-center items-center py-6">
                    <button
                        type="submit"
                        className="text-white w-5/6 text-[17px] bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                    >
                        Registrarse
                    </button>
                    <span
                        className="text-neutral-5 text-[13px] font-semibold hover:text-gray-900"
                        onClick={() => navigate("/login")}
                        style={{ cursor: "pointer" }}
                    >
                        Iniciar sesión
                    </span>
                </div>
            </form>
        </div>
    );
};

export default RegisterAssociation;
