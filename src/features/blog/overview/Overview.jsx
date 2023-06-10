import React from "react";
import img from "../../../assets/header-3.jpeg";
import style from "./Overview.module.scss";
import { NavLink } from "react-router-dom";

const Overview = () => {
  return (
    <>
      <div className="container">
        <div className="border-bottom">
          <h1 className="text-center py-3">Blog</h1>
          <ul
            className={`nav nav-underline justify-content-between ${style.navbar}`}
          >
            <li className="nav-item">
              <NavLink className={`${style.navLink} nav-link`}>
                Planting experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${style.navLink} nav-link`}>
                Decor idea
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${style.navLink} nav-link`}>
                Achivement
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${style.navLink} nav-link`}>
                Plant'secret
              </NavLink>
            </li>
          </ul>
          </div>

          <div className="card text-bg-dark mt-3">
            <img src={img} className="card-img" alt="..." />
            <div className={`card-img-overlay ${style.cardText}`}>
              <div>
                <h1 className={`card-title ${style.textTitle}`}>Discover the beauty of plants</h1>
                <h5 className={`${style.textDisplayNone}`}>
                  Multiple lines of text that form the lede, informing new
                  readers quickly and efficiently about what's most interesting
                  in this post's contents.
                </h5>
                <p className={`${style.textDisplayNone}`}>
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default Overview;
