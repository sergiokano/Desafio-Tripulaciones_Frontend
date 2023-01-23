/* eslint-disable react-hooks/exhaustive-deps */
import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tower from "../../assets/svgs/Tower.svg";
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

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message });
    }

    if (isSuccess) {
      notification.success({ message: "Success", description: message });

      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }

    // dispatch(reset());
  }, [isError, isSuccess, message]);

  return (
    <div className="w-screem h-screen flex flex-col">
     
      <form
        className="flex-1 flex flex-col"
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <div className="flex-1 bg-neutral-1 flex flex-col items-center">
          <img src={Tower} alt="" className="w-10/12 mt-12" />
          <div className="w-full flex flex-col justify-center items-center py-6">
            <div className="py-6 justify-center">
              <span className="font-semibold text-[28px] leading-7">
                ¡Bienvenido/a!
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 justify-center items-center py-6">
          <span className="font-neutral text-[14px] ">
              Te has registrado correctamente.
            </span>
            <span className="font-neutral text-[14px]">
              ¡Adelante! Estás en tu casa.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 justify-center items-center py-6">
          <button
            type="submit"
            className="text-white w-5/6 text-[17px] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
            onClick={() => navigate("/login")}
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
