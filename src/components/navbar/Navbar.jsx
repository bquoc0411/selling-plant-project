import React from "react";
import style from "./navbar.module.scss";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";


export default function Navbar() {
  return (
    <>
      <div className="container">
        <nav
          className="navbar navbar-expand-md navbar-background border-bottom"
          aria-label="Fourth navbar example"
        >
          <div className="container-fluid">
            <a className={`navbar-brand ${style.brandName}`}>GREENMIND</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample04"
              aria-controls="navbarsExample04"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav me-auto mb-2 mb-md-0 ms-5">
                <li className="nav-item">
                  <NavLink className="nav-link pe-4" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link pe-4" to="/product/all">
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link pe-4" to="/blog">
                    Blog
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-md-0 ms-5">
                <li className="nav-item">
                  <a
                    className="nav-link active px-3 border-end border-2 border-black"
                    href="#"
                  >
                    <BsFillCartFill />
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink to='/login'className="nav-link px-3">
                    Log out
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
