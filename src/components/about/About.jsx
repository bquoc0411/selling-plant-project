import React from "react";
import feature from "./data";
import style from "./about.module.scss";

export default function About() {
  return (
    <>
      <div className="container text-center pt-5 mt-5">
        <h2>About us</h2>
        <p className="short-description">
          Are you looking to add some greenery to your living space? Look no
          further!
        </p>

        <div className="row">
          {feature.map((item) => {
            return (
              <div className="col-lg-4 px-5" key={item.id}>
                <div className="py-4 d-flex align-items-center justify-content-center">
                  <div
                    className={`fs-1 d-flex align-items-center justify-content-center ${style.featureList}`}
                  >
                    <item.icon.iconStyle />
                  </div>
                </div>
                <h5 className="fw-bolder">{item.title}</h5>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
