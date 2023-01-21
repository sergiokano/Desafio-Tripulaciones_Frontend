import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  const {
    firstName,
    lastName,
    username,
    email,
    phone,
    address,
    birthdate,
    password,
    confirmPassword,
  } = formData;

  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    formData.password = values.password;
    formData.password2 = values.password2;
    console.log(formData);
    dispatch(register(formData));
    props.setModal(false);
  };

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Bienvenid@ Twitcher@, es hora de remover el caldero",

        description: message,
      });
    }

    if (isError) {
      notification.error({ message: "Error", description: message });
    }
  }, [isSuccess, isError, message]);

  return (
    <div className="register">
      <>
        <form autoComplete="true" onFinish={onFinish}>
          <div className="userForm">
            <input
              name="firstName"
              value={firstName}
              onChange={onChange}
              type="text"
              className="form-control mt-1"
              rules={[
                {
                  required: true,
                  message: "Por favor, ingresa tu Nombre",
                },
              ]}
              placeholder="Nombre"
            />

            <input
              name="email"
              value={email}
              onChange={onChange}
              type="email"
              className="form-control mt-1"
              rules={[
                {
                  required: true,
                  message: "Por favor, ingresa tu correo!",
                },
              ]}
              placeholder="Correo"
            />
          </div>
        </form>
      </>
    </div>
  );
};

export default Register;
