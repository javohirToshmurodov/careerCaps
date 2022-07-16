import React from "react";
import { ProgressCardWrapper } from "../../styles";
import { Progress } from 'antd';

export default function ProgressCard(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-col-sm-6 col-12 ">
      <ProgressCardWrapper className="pt-3">
        <div className="d-flex gap-2">
          <Progress format={""} strokeLinecap="butt" type="dashboard" percent={props.soni} />
        </div>
        <div className="text-center">
          <p className="m-0">{props.title}</p>
          <h3 style={{ "fontWeight": "700" }}>{props.soni} ta</h3>
        </div>
      </ProgressCardWrapper>
    </div>
  );
}
