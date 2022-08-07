import React from "react";
import { ProgressCardWrapper } from "../../styles";
import { Progress } from 'antd';

export default function ProgressCard(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-col-sm-6 col-12 ">
      <ProgressCardWrapper className="pt-3">
        <div className="d-flex gap-2">
          <Progress gapDegree={140} trailColor="#f1f1f1" format={() => ''} strokeWidth={11} type="dashboard" percent={props.soni} />
        </div>
        <div className="text-center position-absolute top-50 my-4">
          <p className="mb-2">{props.title}</p>
          <h3 style={{ "fontWeight": "700" }}>{props.soni} ta</h3>
        </div>
      </ProgressCardWrapper>
    </div>
  );
}
