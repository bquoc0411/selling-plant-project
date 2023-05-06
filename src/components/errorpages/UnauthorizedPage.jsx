import React from "react";
import { useNavigate } from "react-router-dom";

export default function UnauthorizedPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  }
  return (
    <>
      <h1>401</h1>
      <p>You are not authotized for selected action</p>
      <button
        onClick={handleClick}
        type="btn"
        className="btn btn-lg btn-success"
      >
        Back to login page
      </button>
    </>
  );
}
