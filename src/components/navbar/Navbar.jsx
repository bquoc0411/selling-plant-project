import React from "react";
import style from "./navbar.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import { useDispatch, useSelector } from "react-redux";
import { cartTotalSelector } from "../../redux/actions/cartSlice/selectors";
import { removeUser } from "../../redux/actions/loginSlice/loginSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };

  const handleLogOut = () => {
    Swal.fire({
      title: "Do you really want to log out",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  };
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const total = useSelector(cartTotalSelector);

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
              <ul className="navbar-nav me-auto mb-2 mb-md-0 ms-3">
                <li className="nav-item">
                  <NavLink className="nav-link pe-4" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link pe-4" to="/product/homeplants">
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
                <li className="nav-item d-flex align-items-center">
                  <a className="nav-link active px-3 border-end border-2 border-black">
                    <div>
                      <button
                        onClick={() => navigateToCart()}
                        type="button"
                        className="btn btn-success position-relative"
                      >
                        <BsFillCartFill />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {total}
                          <span className="visually-hidden">
                            List of items in your cart
                          </span>
                        </span>
                      </button>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  {user.length > 0 ? (
                    <NavLink
                      onClick={handleLogOut}
                      className="nav-link px-3"
                    >
                      <p className="fw-bold m-0">{user[0].name}</p>
                      Log out
                    </NavLink>
                  ) : (
                    <NavLink to="/login" className="nav-link px-3">
                      Log in
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
