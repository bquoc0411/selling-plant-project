import React from "react";
import style from "./HomeBlog.module.scss";
import { horizontalBlog, verticalBlog } from "../../../hashdata/home/homeblog";
import { Link } from "react-router-dom";

export default function HomeBlog() {
  return (
    <>
      <div className={`container ${style.homeBlogContainer}`}>
        <h1 className="text-center">Blog</h1>
        <p className="text-center">
          Don't know how to start? Visit our <Link to={"/blog"}>blog</Link> for more perfect idea
        </p>
        <div className="row">
          {horizontalBlog.map((item) => {
            return (
              <div className="col-lg-3 col-md-6" key={item.id}>
                <div className="card shadow-sm h-100">
                  <img src={item.img} width="100%" alt="" />
                  <div className="card-body">
                    <h5>{item.title}</h5>
                    <p className="card-text">
                      {item.description.substring(0, 50)}...{" "}
                      <span className="fw-bold">Read more &#8594;</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row">
          {verticalBlog.map((item) => {
            return (
              <div className="col-12 mt-5" key={item.id}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <img src={item.img} style={{ width: "100%" }} />
                      </div>
                      <div className="col-lg-9 col-md-6">
                        <h5>{item.title}</h5>
                        <p>
                          {item.description}...{" "}
                          <span className="fw-bold">Read more &#8594;</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
