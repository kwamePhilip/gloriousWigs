import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

export default function Category(props) {
  return (
    <div className="catImage" style={{ backgroundImage: props.backImg }}>
      <h1>{props.title} </h1>
      <Link to="/cat1Page">
        <button className="btn btn-primary">{props.btnText}</button>
      </Link>
    </div>
  );
}
