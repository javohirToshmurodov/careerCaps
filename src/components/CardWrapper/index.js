import React from "react";
import { MainCardWrapper } from "../../styles";
import {BASE_URL} from "../../utils/constans";
export default function CardWrapper(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-2 ">
      <MainCardWrapper>
        <div className="crownPosition d-flex justify-content-center align-items-center">
          <img className="img-fluid" src={props.crown} alt="" />
        </div>
        <img src={ BASE_URL+`api/v1/file/get/${props.img}`} alt="" />
        <p className="defaultP">{props.jobName}</p>
      </MainCardWrapper>
    </div>
  );
}
