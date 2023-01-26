import React from "react";
import "./Payment.css";
import {BsFillPatchCheckFill} from "react-icons/bs";

const Toast = () => {
  return (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Payment Successfull</strong> <BsFillPatchCheckFill/>
    </div>
  );
};

export default Toast;
