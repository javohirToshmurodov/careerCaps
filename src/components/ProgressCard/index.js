import React from "react";
import { ProgressCardWrapper } from "../../styles";

export default function ProgressCard(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-col-sm-6 col-12 ">
      <ProgressCardWrapper className="pt-3">
        <div className="d-flex gap-2">
          <img src={props.img} alt="" />
          <img src={props.img2} alt="" />
        </div>
        <div className="positionTitle ">
          <p>{props.title}</p>
          <h3>{props.soni}</h3>
        </div>
      </ProgressCardWrapper>
    </div>
  );
}
