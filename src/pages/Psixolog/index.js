import React from "react";
import { OutlineBtn } from "../../styles";
import Dasturchii from "../../assets/images/dasturchii.svg";
export default function Psixolog() {
  return (
    <div className="DefaultBg minHeight">
      <div className="container py-5 px-5 text-white">
        <div class="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
            <h1 className="title">Psixolog</h1>
            <p className="subtitle">
              Dasturiy ta'minot uchun kod yozuvchi va sinovdan o'tkazuvchi
              mutaxassis
            </p>
            <OutlineBtn className="mt-4 outBtn">Batafsil</OutlineBtn>
          </div>
          <div className="col-lg-6 col-md-6 col-xl-g col-sm-12   col-12">
            <Dasturchii />
          </div>
        </div>
      </div>
    </div>
  );
}
