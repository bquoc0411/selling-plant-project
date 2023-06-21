import React from "react";
import logo from "../../../assets/favicon.ico";
import { useSelector } from "react-redux";
import { cartTotalPriceSelector } from "../../../redux/actions/cartSlice/selectors";

const Summary = () => {
  const total = useSelector(cartTotalPriceSelector);
  const user = useSelector((state) => state.login);
  return (
    <>
      <form className="p-3 shadow-lg">
        <h3>Payment</h3>

        <img className="mb-4" src={logo} alt="" width="72" height="57" />

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your name"
            value={user[0].name}
          />
          <label htmlFor="name">Name</label>
        </div>

        {/* Just for Vietnamese's phone number */}
        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="Your phone number"
            value={user[0].phoneNumber}
          />
          <label htmlFor="phoneNumber">Phone number</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
          />
          <label htmlFor="address">Address</label>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p>Subtotal</p>
          <p className="fw-bold">${total.toFixed(2)}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Shipping</p>
          <p className="fw-bold">$ 20.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p className="fw-bold">$ {(total + 20).toFixed(2)}</p>
        </div>
        <div className="btnGroup d-flex justify-content-center">
          <button className="btn btn-success">CHECKOUT</button>
        </div>
      </form>
    </>
  );
};

export default Summary;
