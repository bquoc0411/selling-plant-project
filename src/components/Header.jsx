import React from "react";
import img from "../asset/header.png";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div>
                <h1 className="title mb-4">Buy your favorite plant</h1>
                <div className="row">
                  <div className="col-6">
                    <h3>50+</h3>
                    <p>Plant species</p>
                  </div>
                  <div className="col-6">
                    <h3>100.000+</h3>
                    <p>Customer</p>
                  </div>
                </div>
                <form>
                  <div className="input-group mb-3">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="What are you looking for?"
                        aria-label="What are you looking for?"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text" id="basic-addon2">
                        <BsSearch />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <img src={img} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
