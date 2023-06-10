import React from "react";
import style from "./TopBlog.module.scss";
import img1 from "../../../assets/blog/rop-jasmine.jpg";
import img2 from "../../../assets/blog/top-watering.jpg";

const TopBlog = () => {
  return (
    <>
      <div className="container mt-5">
        <div
          className={`row d-flex justify-content-between ${style.cardPadding}`}
        >
          <div className="col-lg-6 pb-5">
            <div className="row shadow py-3">
              <div className="col-lg-8 col-md-8 col-sm-6">
                <h5>How to make jasmine blooming more</h5>
                <p>
                  Jasmine will bloom indoors if given proper care; Sunlight:
                  This plant requires a lot of sun, so if you do not have a
                  south-facing window available with lots of sunlight, ...
                </p>
                <p className="m-0">Last updated 3 mins ago</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <img className={`${style.imgWidth}`} src={img1} />
              </div>
            </div>
          </div>

          <div className="col-lg-6 pb-5">
            <div className="row shadow py-3">
              <div className="col-lg-8 col-md-8 col-sm-6">
                <h5>HOW TO WATER YOUR INDOOR PLANTS THE RIGHT WAY</h5>
                <p>
                  Watering from below is best. Although watering from above is
                  still the usual way people water their plants, watering from
                  underneath is more homogeneous, ...
                </p>
                <p className="m-0">Last updated 3 mins ago</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <img className={`${style.imgWidth}`} src={img2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBlog;
