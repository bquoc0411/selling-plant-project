import React from "react";
import style from "./signin.module.scss";
import logo from "../../asset/favicon.ico";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function LogIn() {
  //Declare useForm and use Navigate
  const navigate = useNavigate();

  const SignupSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is a required field")
      .min(3, "Name must be longer than 3 characters"),
    phoneNumber: yup
      .string()
      .required("Phone number is a required field")
      .matches(/^0[1-9]\d{8}$/, "Your phone number is not validate"),
    emailAddress: yup
      .string()
      .required("Email address is a required field")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        "Your email is not validate"
      ),
    password: yup
      .string()
      .required("Password is a required field")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.parse(JSON.stringify(data)));
    navigate("/homepage");
  };

  return (
    <div className={`text-center ${style.ownStyleForm}`}>
      <form onSubmit={handleSubmit(onSubmit)} >
        <img className="mb-4" src={logo} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating mb-1" >
          <input
            {...register("name", { required: true })}
            type="text"
            className="form-control"
            id="name"
            placeholder="Your name"
          />
          <label htmlFor="name">Name</label>
          {errors.name && (
            <p className={`${style.err}`}>{errors.name.message}</p>
          )}
        </div>

        {/* Just for Vietnamese's phone number */}
        <div className="form-floating mb-1">
          <input
            {...register("phoneNumber", {
              required: true,
              maxLength: 10,
              pattern: /^0[1-9]\d{8}$/,
            })}
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="Your phone number"
          />
          <label htmlFor="phoneNumber">Phone number</label>
          {errors.phoneNumber && (
            <p className={`${style.err}`}>{errors.phoneNumber.message}</p>
          )}
        </div>
        <div className="form-floating mb-1">
          <input
            {...register("emailAddress", { required: true })}
            type="email"
            className="form-control"
            id="emailAdress"
            placeholder="name@example.com"
          />
          <label htmlFor="emailAdress">Email address</label>
          {errors.emailAddress && (
            <p className={`${style.err}`}>{errors.emailAddress.message}</p>
          )}
        </div>
        <div className="form-floating">
          <input
            {...register("password", { required: true })}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
          {errors.password && (
            <p className={`${style.err}`}>{errors.password.message}</p>
          )}
        </div>

        <div className="checkbox my-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 mb-3 btn btn-lg btn-success" type="submit">
          Log in
        </button>
        <p className="my-3 text-body-secondary">© GREENMIND. 2023</p>
      </form>
    </div>
  );
}
