import React from "react";
import feature from "./data";
import style from "./about.module.scss";

export default function About() {
  return (
    <>
      <div className="container text-center py-5">
        <h2>About us</h2>
        <p className="short-description">
          Order now and appreciate the beauty of nature
        </p>

        <div className="row">
          {feature.map((item) => {
            return (
              <div className="col-lg-4 px-5" key={item.id}>
                <div className="py-4 d-flex align-items-center justify-content-center">
                  <div className={`fs-1 d-flex align-items-center justify-content-center ${style.featureList}`}><item.icon.iconStyle/></div>
                </div>
                <p className="fw-bolder">{item.title}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
