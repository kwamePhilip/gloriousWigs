import React, { useState } from "react";
import ProductDescription from "./productDescription";
import PaymentFormComp from "./paymentForms";
import "./cat1Page.css";

export default function CatCard(props) {
  const [buyNowContent, setBuyNowContent] = useState(
    <ProductDescription
      hairName={props.actualHairName}
      detailedDescription={props.correctDes}
      PaymentForm={PaymentForm}
    />
  );

  function PaymentForm() {
    return setBuyNowContent(
      <div>
        <PaymentFormComp />
      </div>
    );
  }

  return (
    <div
      className="card col-lg-3 carousel slide"
      data-ride="carousel"
      style={{ width: "18rem" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active card-img-top">
          <img
            src="../../assets/categoryImages/cat1.png"
            className="d-block w-100 "
            alt="hair pic"
          />
        </div>
        <div className="carousel-item">
          <img
            src="../../assets/categoryImages/cat2.png"
            className="d-block w-100"
            alt="hair pic"
          />
        </div>
        <div className="carousel-item">
          <img
            src="../../assets/categoryImages/cat3.png"
            className="d-block w-100"
            alt="hair pic"
          />
        </div>
      </div>
      {buyNowContent}
    </div>
  );
}
