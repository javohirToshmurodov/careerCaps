import React from "react";

export default function CardMaker(props) {
  return (
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 cardmaker pt-5 pe-5 pb-4">
        <img className="mb-3 img-fluid minHeightImg" src={props.img} alt="" />
        <h2>{props.title}</h2>
        <p className="maxwidthP">{props.description}</p>
    </div>
  );
}
