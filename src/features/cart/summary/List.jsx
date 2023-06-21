import React from "react";
import { useDispatch } from "react-redux";
import {
  remove,
  increasement,
  decreasement,
} from "../../../redux/actions/cartSlice/cartSlice";

const List = ({ cartList }) => {

  const dispatch = useDispatch();

  return (
    <>
      {cartList ? (
        cartList.map((item) => {
          return (
            <div className="card mb-3" key={item.id}>
              <div className="card-body border border-0">
                <div className="row d-flex justify-content-between">
                  <div className="col-md-12 col-lg-6 pb-3 pb-lg-0">
                    <div className="d-flex align-items-center">
                      <img
                        src={item.img}
                        className="img-fluid rounded-3"
                        alt="Shopping item"
                        style={{ width: "65px" }}
                      />

                      <div className="ms-3">
                        <h5>{item.name}</h5>
                        <p className="small mb-0">
                          {item.table.type} ($ {item.price})
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 pb-0 d-flex justify-content-between align-items-center">
                    <div style={{ paddingRight: "32px" }}>
                      <div className="d-flex align-items-center">
                        <button
                          onClick={() => dispatch(decreasement(item))}
                          disabled={item.quantity === 1}
                          className="btn btn-success"
                        >
                          -
                        </button>
                        <h5 className="fw-normal mb-0 px-3">{item.quantity}</h5>
                        <button
                          onClick={() => dispatch(increasement(item))}
                          className="btn btn-success"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div style={{ marginRight: "32px", width: "80px" }}>
                      <h5 className="mb-0">
                        $ {(item.price * item.quantity).toFixed(2)}
                      </h5>
                    </div>
                    <button
                      onClick={() => dispatch(remove(item))}
                      className="btn btn-danger"
                    >
                      &#10005;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No item in your cart. Back to shoppp</p>
      )}
    </>
  );
};

export default List;
