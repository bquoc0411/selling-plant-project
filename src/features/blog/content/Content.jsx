import React from "react";
import style from "./Content.module.scss";
import { verticalBlog } from "../../home/homeblog/data";

const Content = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>Latest post</h2>
            <hr />
            <div className="row">
              {verticalBlog.map((item) => {
                return (
                  <div className="col-12" key={item.id}>
                    <h3 className={`${style.postTitle}`}>
                      {item.title.toUpperCase()}
                    </h3>
                    <div>
                      <img src={item.img} className={style.blogimg} />
                    </div>

                    <p>{item.description.substring(0, 300)} ...</p>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-dark"
                    >
                      View details &#8594;
                    </button>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card text-bg-dark mb-3">
              <h3 className="card-header">Achivement</h3>
              <div className="card-body">
                <p className="card-text">
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis
                  consectetur purus sit amet fermentum. Aenean lacinia bibendum
                  nulla sed consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
