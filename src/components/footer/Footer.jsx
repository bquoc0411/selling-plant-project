import React from "react";
import style from "./footer.module.scss"

import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiShopee } from "react-icons/si";

export default function Footer() {
  return (
    <footer className={`${style.footer}`}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 text-center mb-5">
            <h2>GREENMIND</h2>
            <p>We help you find your dream plant</p>
            <div className="d-flex justify-content-evenly">
              <div className={`${style.footerNetworkIcon} px-2 py-2 d-flex align-items-center justify-content-center`}>
                <FaFacebookF />
              </div>
              <div className={`${style.footerNetworkIcon} px-2 py-2 d-flex align-items-center justify-content-center`}>
                <AiFillInstagram />
              </div>
              <div className={`${style.footerNetworkIcon} px-2 py-2 d-flex align-items-center justify-content-center`}>
                <SiShopee />
              </div>
            </div>
          </div>

          <div className="col-lg-8 mb-5">
            <div className="row">
              <div className="col-4">
                <p className="fw-bolder">Information</p>
                <p>About</p>
                <p>Product</p>
                <p>Blog</p>
              </div>
              <div className="col-4">
                <p className="fw-bolder">Company</p>
                <p>Community</p>
                <p>Career</p>
                <p>Our story</p>
              </div>
              <div className="col-4">
                <p className="fw-bolder">Contact</p>
                <p>Getting started</p>
                <p>Pricing</p>
                <p>Resources</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`text-center ${style.footerDescription}`}>© 2023 GREENMIND. All right reserved</div>
      </div>
    </footer>
  );
}
