import React from "react";
import {
  ManbalarWrapper,
  ManbalarWrapperFirst,
  OutlineBtn,
} from "../../styles";

export default function Manbalar(props) {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya">
          <ManbalarWrapperFirst>
            <h1 className="defaultH1">Mustaqil o'rganish uchun manbalar</h1>
          </ManbalarWrapperFirst>
        </div>
        <div className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya">
          <ManbalarWrapper>
            <img src={props.img} alt="" />
            <h1 className="defaultH1">{props.title}</h1>
            <p className="defaultP">{props.description}</p>
            <OutlineBtn>Platformaga o'tish</OutlineBtn>
          </ManbalarWrapper>
        </div>
      </div>
    </div>
  );
}
