import React from "react";
import { useNavigate } from "react-router-dom";

export default function NoPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/homepage");
  }
  return (
    <>
      <h1>404</h1>
      <h3>Ooops!</h3>
      <h3>Page Not Found</h3>
      <p>This page doesn't exist or was removed!</p>
      <p>We suggest you back to home page</p>
      <button
        onClick={handleClick}
        type="btn"
        className="btn btn-lg btn-success"
      >
        Back to home page
      </button>
    </>
  );
}
