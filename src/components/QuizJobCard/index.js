import React, { useEffect, useState } from "react";
import { QuizJobCardWrapper } from "../../styles";

export default function QuizJobCard(props) {
  const [cardId, setCardId] = useState("");
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <label htmlFor={props.id}
      className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-3"
    >
      <QuizJobCardWrapper>
        <div className="positionInput">
          <input id={props.id} value={props.id} onChange={(e) => props.select(e)} name="quizId" type="radio" className="form-check-input" />
        </div>
        <div>
          <img className="img-fluid" src={`http://ec2-35-158-135-234.eu-central-1.compute.amazonaws.com/api/v1/file/get/${props.img}`} alt="" />
          <h3>{props.jobName}</h3>
         
        </div>
      </QuizJobCardWrapper>
    </label>
  );
}
