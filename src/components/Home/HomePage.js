import React from "react";
import Category from "./Category";
import Header from "../Header";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Category
        backImg="linear-gradient(#007bff70, #007bff26), url(../../assets/categoryImages/cat1.png)"
        title="Category 1 Wigs"
        btnText="Check out more Cat1 Wigs"
      />
      <Category
        backImg="linear-gradient(#007bff70, #007bff26), url(../../assets/categoryImages/cat2.png)"
        title="Category 2 Wigs"
        btnText="Check out more Cat2 Wigs..."
      />
      <Category
        backImg="linear-gradient(#007bff70, #007bff26), url(../../assets/categoryImages/cat3.png)"
        title="Category 3 Wigs"
        btnText="Check out more Cat3 Wigs..."
      />
      <Footer />
    </div>
  );
}
