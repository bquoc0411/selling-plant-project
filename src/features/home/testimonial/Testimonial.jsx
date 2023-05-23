import React from "react";
import style from "./Testimonial.module.scss";
import userFeedBackList from "./data.js";
import quote from "../../../asset/testimonial/quote.svg";

export default function Testmonial() {
  return (
    <>
      <div className={`${style.backgroudColor}`}>
        <h1 className="text-center">Testimonial</h1>
        <p className="text-center">How our plants have transformed homes and brought joy to our customers?</p>
        <div className="container">
          <div className="row">
            {userFeedBackList.map((user) => {
              return (
                <div className="col-lg-4 col-md-12 col-sm-12 pt-3">
                  <div class="card h-100 p-3">
                    <div className="d-flex align-items-center">
                      <img src={quote} className={style.quote} />
                      <h5 className="card-title m-0">{user.title}</h5>
                    </div>
                    <p class="card-text">{user.feedback}</p>
                    <div className="d-flex justify-content-center mb-3">
                      <img src={user.img} className={style.userImg} />
                    </div>
                    <h5 class="card-title text-center">{user.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
