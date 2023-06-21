import React from "react";
import bestSellerItemList from "../../hashdata/home/bestSeller";

export default function BestSeller() {
  return (
    <>
      <div className="container pt-5 mt-5">
        <h1 className="text-center">Best seller in GREENMIND</h1>
        <p className="text-center"> Our selection of beautiful plants will add life and vibrancy to your home</p>
        <div className="row">
          {bestSellerItemList
            ? bestSellerItemList.map((item) => {
                return (
                  <div className="col-lg-4 pb-5" key={item.id}>
                    <div className="card shadow-sm">
                      <img src={item.imgSrc} width="100%" alt="" />
                      <div className="card-body">
                        <h5>{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-dark"
                            >
                              View details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
