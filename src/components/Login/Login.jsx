/* eslint-disable react-hooks/exhaustive-deps */
import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Bridge from "../../assets/svgs/Bridge.svg";
import { login, reset } from "../../features/auth/authSlice";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const { email, password } = formData;
    const { isError, isSuccess, message } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const onChange = (e) => {
        if (isError) {
            dispatch(reset());
        }
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        dispatch(reset());
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    };

    
    useEffect(() => {
        if (isError) {
            notification.error({ message: "Error", description: message });
        }

        if (isSuccess) {
            notification.success({
                message: "Bienvenido/a",
                description: message,
            });

            setTimeout(() => {
                navigate("/home-map");
            }, 2000);
        }

        // dispatch(reset());
    }, [isError, isSuccess, message]);

    return (
        <div className="w-screem h-screen flex flex-col">
            <div className="py-6 w-full flex justify-center">
                <span className="w-5/6 font-semibold text-[20px] leading-7">
                    ¡Adelante! Estás en tu casa
                </span>
            </div>
            <form
                className="flex-1 flex flex-col"
                onSubmit={onSubmit}
                autoComplete="off"
            >
                <div className="flex-1 bg-neutral-1 flex flex-col items-center">
                    <img src={Bridge} alt="" className="w-10/12 mt-12" />
                    <div className="flex flex-col w-5/6 mt-10 gap-2">
                        <div>
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
                        <div>
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
                    </div>
                    <div
                        className="my-5 flex-1 w-full flex flex-col-reverse"
                        style={{ display: isError ? "block" : "none" }}
                    >
                        <div className="w-full bg-orange-1 py-4 px-6 text-white flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div>
                                    <HiOutlineMail className="text-[22px]" />
                                </div>
                                <span className="text-sm">
                                    Datos incorrectos. Puede que aún no seas
                                    miembro.
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span
                                    className="text-[13px] p-1 border-white border rounded-[20px] px-2  hover:bg-orange-2 "
                                    onClick={() => navigate("/register")}
                                >
                                    Registrarse
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3 justify-center items-center py-6">
                    <button
                        type="submit"
                        className="text-white w-5/6 text-[17px] bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                    >
                        Iniciar sesión
                    </button>
                    <span
                        className="text-neutral-5 text-[13px] font-semibold hover:text-gray-900"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/register")}
                    >
                        Registrarse
                    </span>
                </div>
            </form>
        </div>
    );
};
export default Login;
