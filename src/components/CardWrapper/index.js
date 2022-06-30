import React from "react";
import { MainCardWrapper } from "../../styles";
export default function CardWrapper(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
      <MainCardWrapper>
        <div className="crownPosition">
          <img src={props.crown} alt="" />
        </div>
        <img src={props.img} alt="" />
        <p className="defaultP">{props.jobName}</p>
      </MainCardWrapper>
    </div>
  );
}
