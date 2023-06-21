import React from "react";
import style from "./Items.module.scss";
import { FcSearch, FcFilledFilter } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { searchQuery } from "../../../redux/actions/filter/filterItemsSlice";


const Items = ({ name, categories, filterLowPrice, filterMiddlePrice, filterHighPrice, returnAll, handleSubmit, handleOnchange}) => {

  return (
    <>
      <div className={`container ${style.minHeight}`} >
        <h1 className="text-center py-3">{name}</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
            <form onSubmit={handleSubmit}>
            <label htmlFor="searchItem" className="form-label">
                <FcSearch /> Let's find your favorite plant
              </label>
              <input
                type="text"
                className="form-control"
                id="searchItem"
                placeholder="Eg: zz plant"
                onChange={handleOnchange}
              />
            </form>
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
                <li onClick={returnAll}>
                    <div className="dropdown-item">
                      All
                    </div>
                  </li>
                  <li onClick={filterLowPrice}>
                    <div className="dropdown-item">
                      0-30$
                    </div>
                  </li>
                  <li onClick={filterMiddlePrice}>
                    <div className="dropdown-item">
                      30-70$
                    </div>
                  </li>
                  <li>
                    <div onClick={filterHighPrice} className="dropdown-item">
                      More than 70$
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {(categories && categories.length > 0)
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
            : <p className="text-center">No Products Found</p>}
        </div>
      </div>
    </>
  );
};

export default Items;
