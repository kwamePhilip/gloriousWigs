import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import CatCard from "./catCard";
import "./cat1Page.css";

export default function FirstCategory() {
  return (
    <div>
      <Header />
      <CatCard />
      <Footer />
    </div>
  );
}
