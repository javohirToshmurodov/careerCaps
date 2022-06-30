import React from "react";
import { CardMiniWrapper } from "../../styles";

export default function CardMini(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
      <CardMiniWrapper>
        <div>
          <img src={props.img} alt="" />
        </div>
        <div className="align-self-end">
          <p className="mediumP m-0">{props.kim}</p>
          <h3>{props.soni} ta</h3>
        </div>
      </CardMiniWrapper>
    </div>
  );
}
