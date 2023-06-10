import React from "react";
import style from "./Categories.module.scss";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="container">
        <div className="border-bottom">
          <h1 className="text-center py-3">Product</h1>
          <ul
            className={`nav nav-underline justify-content-between ${style.navbar}`}
          >
            <li className="nav-item">
              <NavLink
                to={"all"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? `${style.navLink} nav-link ${style.myActive}`
                    : `${style.navLink} nav-link`
                }
              >
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"homeplants"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? `${style.navLink} nav-link ${style.myActive}`
                    : `${style.navLink} nav-link`
                }
              >
                Home Plants
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"flowers"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? `${style.navLink} nav-link ${style.myActive}`
                    : `${style.navLink} nav-link`
                }
              >
                Flower
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"herbs"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? `${style.navLink} nav-link ${style.myActive}`
                    : `${style.navLink} nav-link`
                }
              >
                Herbs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"others"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? `${style.navLink} nav-link ${style.myActive}`
                    : `${style.navLink} nav-link`
                }
              >
                Fertilizer, pots, others
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;
