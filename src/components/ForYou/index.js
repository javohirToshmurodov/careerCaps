import React from "react";
import { ForYouWrapper } from "../../styles";
import { TestOutlineBtn } from "../TestOutlineBtn";

export default function ForYou(props) {
  return (
    <div className="row">
      <div
        className="col-xl-6 col-lg-6"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
        <h1 className="defaultH1">{props.title}</h1>
      </div>
      <div className="col-xl-6 col-lg-6">
        <ForYouWrapper>
          <h1 className="defaultH1">{props.subtitle}</h1>
          <div className="d-flex justify-content-between align-items-start">
            <p className="defaultP">{props.description}</p>
            <TestOutlineBtn />
          </div>
        </ForYouWrapper>
      </div>
    </div>
  );
}
