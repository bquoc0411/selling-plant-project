import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Summary from "./summary/Summary";
import Footer from "../../components/footer/Footer";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import style from "./Cart.module.scss";

import { useSelector } from "react-redux";

import { cartTotalSelector } from "../../redux/actions/cartSlice/selectors";
import List from "./summary/List";

const Cart = () => {
  const cartList = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(cartList));
  }, [cartList]);

  const total = useSelector(cartTotalSelector);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center">Cart</h1>
        <div className="row">
          <div className="col-lg-8">
            <Link to={"/product/all"} className={`${style.back}`}>
              <h3>
                <BsArrowLeft className={`${style.icon}`} /> {"  "} Continue
                shopping
              </h3>
            </Link>
            <hr />
            <p>You have {total} items in your cart</p>
            <List cartList={cartList} />
          </div>
          <div className="col-lg-4">
            <Summary />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
