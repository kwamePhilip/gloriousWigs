import React from "react";
import "./Category.css";

export default function Category(props) {
  return (
    <div className="catImage" style={{ backgroundImage: props.backImg }}>
      <h1>{props.title} </h1>
      <button onClick className="btn btn-primary">
        {props.btnText}
      </button>
    </div>
  );
}
