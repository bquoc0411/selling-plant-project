import React from "react";
import style from "./Items.module.scss";
import { FcSearch, FcFilledFilter } from "react-icons/fc";
import { Link } from "react-router-dom";


const Items = ({ name, categories }) => {
  return (
    <>
      <div className={`container ${style.minHeight}`} >
        <h1 className="text-center py-3">{name}</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <label for="searchItem" className="form-label">
                <FcSearch /> Let's find your favorite plant
              </label>
              <input
                type="email"
                className="form-control"
                id="searchItem"
                placeholder="Eg: rosemary"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-end">
            <div className="mb-4">
              <div className="btn-group dropend">
                <button
                  type="button"
                  className="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FcFilledFilter /> Filter by price {" "}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      0-30$
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      30-70$
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      More than 70$
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {categories
            ? categories.map((item) => {
                return (
                  <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: '#000' }} className="col-lg-3 col-md-6 pb-5" key={item.id}>
                    <div className="card shadow-sm h-100 ">
                      <img src={item.img} width="100%" alt="" />
                      <div className="card-body">
                        <h5>{item.name}</h5>
                        <p className="card-text">
                          {item.description.substring(0, 100)} . . .
                        </p>
                        <div className="d-flex">
                          <h3>
                            ${" "}
                            {(
                              item.price -
                              (item.sale / 100) * item.price
                            ).toFixed(2)}
                          </h3>
                          {item.sale > 0 ? (
                            <p className={`${style.sale} px-2`}>
                              ({item.price})
                            </p>
                          ) : null}
                        </div>
                        {/* <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-dark"
                            >
                              Add to your cart
                            </button>
                          </div>
                        </div> */}
                      </div>
                      {item.isFreeShip ? (
                        <span
                          className={`position-absolute ${style.position} translate-middle badge rounded-pill bg-success`}
                        >
                          Freeship
                        </span>
                      ) : null}
                    </div>
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Items;
