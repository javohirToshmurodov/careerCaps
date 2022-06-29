import React from "react";
import { OutlineBtn } from "../../styles";
import dasturchii from "../../assets/images/dasturchii.svg";
export default function Arxitektor() {
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">Arxitektor</h1>
              <p className="subtitle">vahokazo</p>
              <OutlineBtn className="mt-4 outBtn">Batafsil</OutlineBtn>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-g col-sm-12 d-flex ps-5 col-12">
              <img src={dasturchii} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
