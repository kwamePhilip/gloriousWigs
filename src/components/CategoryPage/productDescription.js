import React from "react";

export default function ProductDescription(props) {
  return (
    <div className="card-body">
      <h5 className="card-title"> {props.hairName} </h5>
      <p className="card-text">{props.detailedDescription}</p>
      <button onClick={props.PaymentForm} className="btn btn-primary">
        Buy Now
      </button>
    </div>
  );
}
