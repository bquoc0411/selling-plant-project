import React from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import all from "../data/all";
import BestSeller from "../../../components/bestseller/BestSeller";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../redux/actions/cartSlice/cartSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const ProductDetail = () => {
  const { productId } = useParams();
  const thisProduct = all.find((prod) => prod.id === productId);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  console.log("user",user)
  const addToCart = (product) => {
    if (user && user.length > 0) {
      dispatch(add(product));
    } else {
      Swal.fire({
        title: "You must log in before add it into your cart",
        showCancelButton: true,
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <h1 className="text-center pb-5">{thisProduct.name}</h1>
          <div className="col-lg-6 pb-5">
            <img src={thisProduct.img} style={{ width: "100%" }} />
          </div>
          <div className="col-lg-6 pb-5">
            {thisProduct?.table ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Character</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row">Type</th>
                    <td>{thisProduct.table.type}</td>
                  </tr>
                  <tr>
                    <th scope="row">Tempurature</th>
                    <td>{thisProduct.table.tempt}</td>
                  </tr>
                  <tr>
                    <th scope="row">Watering</th>
                    <td>{thisProduct.table.water}</td>
                  </tr>
                  <tr>
                    <th scope="row">Is friendly?</th>
                    <td>{thisProduct.table.pet}</td>
                  </tr>
                  <tr>
                    <th scope="row">Growing speed</th>
                    <td>{thisProduct.table.grow}</td>
                  </tr>
                </tbody>
              </table>
            ) : null}
            <h3>Description</h3>
            <p>{thisProduct.description}</p>
            <div className="btnGroup d-flex justify-content-end">
              <button
                onClick={() => addToCart(thisProduct)}
                type="button"
                className="btn btn-success"
              >
                Add to your cart
              </button>
            </div>
          </div>
        </div>

        <hr />
        <BestSeller />
      </div>
    </>
  );
};

export default ProductDetail;
