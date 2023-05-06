import React from "react";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
    <div className="spinner-border d-flex align-self-center" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <h1 className="px-3">Loading...</h1>
  </div>
  );
}
