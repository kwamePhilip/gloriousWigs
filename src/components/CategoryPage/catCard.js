import React, { useState } from "react";
import ProductDescription from "./productDescription";
import "./cat1Page.css";

export default function CatCard() {
  const [buyNowContent, setBuyNowContent] = useState(
    <ProductDescription PaymentForm={PaymentForm} />
  );

  function PaymentForm() {
    return setBuyNowContent(
      <div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Quantity" /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  function Content() {
    return <div> {buyNowContent} </div>;
  }

  return (
    <div className="row">
      <div
        className="card col-lg-3 carousel slide"
        data-ride="carousel"
        style={{ width: "18rem" }}
      >
        <div className="carousel-inner">
          <div class="carousel-item active card-img-top">
            <img
              src="../../assets/categoryImages/cat1.png"
              class="d-block w-100 "
              alt="hair pic"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/categoryImages/cat2.png"
              class="d-block w-100"
              alt="hair pic"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/categoryImages/cat3.png"
              class="d-block w-100"
              alt="hair pic"
            />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div
        className="card col-lg-3 carousel slide"
        data-ride="carousel"
        style={{ width: "18rem" }}
      >
        <div className="carousel-inner">
          <div class="carousel-item active card-img-top">
            <img
              src="../../assets/categoryImages/cat1.png"
              class="d-block w-100 "
              alt="hair pic"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/categoryImages/cat2.png"
              class="d-block w-100"
              alt="hair pic"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/categoryImages/cat3.png"
              class="d-block w-100"
              alt="hair pic"
            />
          </div>
        </div>

        <Content />
      </div>
      <div
        className="card col-lg-3 carousel slide"
        data-ride="carousel"
        style={{ width: "18rem" }}
      >
        <div className="carousel-inner">
          <div class="carousel-item active card-img-top">
            <img
              src="../../assets/categoryImages/cat1.png"
              class="d-block w-100 "
              alt="hair pic"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/categoryImages/cat2.png"
              class="d-block w-100"
              alt="hair pic"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/categoryImages/cat3.png"
              class="d-block w-100"
              alt="hair pic"
            />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
