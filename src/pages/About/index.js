import React from "react";

export default function About() {
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">CareerCaps</h1>
              <p className="subtitle">Kelajak kasbingizni biz bilan tanlang</p>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-g col-sm-12   col-12">
              <img className="img-fluid" src={""} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
