import React from "react";

export default function CardMaker(props) {
  return (
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 cardmaker pb-4">
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  );
}
