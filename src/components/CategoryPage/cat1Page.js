import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import CatCard from "./catCard";
import "./cat1Page.css";

export default function FirstCategory() {
  return (
    <div>
      <Header />
      <div className="row">
        <CatCard actualHairName="best hair do" correctDes="this is great" />
        <CatCard
          actualHairName="best second hair do"
          correctDes="this is second great"
        />
        <CatCard
          actualHairName="best third hair do"
          correctDes="this is 3rd great"
        />
      </div>
      <div className="row">
        <CatCard
          actualHairName="best third hair do"
          correctDes="this is 3rd great"
        />
      </div>
      <Footer />
    </div>
  );
}
