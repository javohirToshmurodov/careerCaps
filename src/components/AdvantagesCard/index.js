import React from "react";
import { AdvantagesCardWrapper } from "../../styles";

export default function AdvantagesCard(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
      <AdvantagesCardWrapper>
        <h2>{props.title}</h2>
        <img src={props.img} alt="" />
        <p className="defaultP">{props.description}</p>
      </AdvantagesCardWrapper>
    </div>
  );
}
