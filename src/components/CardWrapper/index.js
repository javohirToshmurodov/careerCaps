import React from "react";
import { MainCardWrapper } from "../../styles";
export default function CardWrapper(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-2">
      <MainCardWrapper>
        <div className="crownPosition d-flex justify-content-center align-items-center">
          <img className="img-fluid" src={props.crown} alt="" />
        </div>
        <img src={`http://ec2-35-158-135-234.eu-central-1.compute.amazonaws.com/api/v1/file/get/${props.img}`} alt="" />
        <p className="defaultP">{props.jobName}</p>
      </MainCardWrapper>
    </div>
  );
}
