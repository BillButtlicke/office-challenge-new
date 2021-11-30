import React from "react";
import { Navigate } from "react-router-dom";

function Logout() {
  return (
    <center>
      <h1>Successfully logged out! Redirecting you to the login page!</h1>
      <Navigate to="/login" />
    </center>
  );
}

export default Logout;
