import React, { useState } from "react";

export default function ProductDescription(props) {
  return (
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <button onClick={props.PaymentForm} className="btn btn-primary">
        Buy Now
      </button>
    </div>
  );
}