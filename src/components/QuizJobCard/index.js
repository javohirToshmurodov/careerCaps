import React from "react";
import { QuizJobCardWrapper } from "../../styles";

export default function QuizJobCard(props) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
      <QuizJobCardWrapper>
        <div className="positionInput">
          <input name="job" type="radio" className="form-check-input" />
        </div>
        <div>
          {props.img}
          <h3>{props.jobName}</h3>
        </div>
      </QuizJobCardWrapper>
    </div>
  );
}
