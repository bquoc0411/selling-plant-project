import React from "react";
import style from "./signin.module.scss";
import logo from "../../asset/favicon.ico";

export default function LogIn() {
  return (
    <div className={`text-center ${style.ownStyleForm}`}>
      <form>
        <img className="mb-4" src={logo} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating mb-1">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox my-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 mb-3 btn btn-lg btn-success" type="submit">
          Log in
        </button>
        <button className="w-100 btn btn-lg btn-success" type="submit">
          Log in as administrator
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© GREENMIND. 2023</p>
      </form>
    </div>
  );
}
