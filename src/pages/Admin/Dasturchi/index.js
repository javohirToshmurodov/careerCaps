import React from "react";
import { useState } from "react";
import { instance } from "../../../redux/actions";
import { ImgWrapper } from "../../../styles";
export default function DasturchiChild() {
  const [pictureId, setPictureId] = useState("");
  const handleFile = (e) => {
    const formData = new FormData();
    formData.append("files", e);
    instance
      .post("api/v1/file/saveAttachments", formData)
      .then((res) => {
        console.log(res.data.data);
        setPictureId(res?.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row">
      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-6 col-12">
        <ImgWrapper></ImgWrapper>
        <input
          onChange={(e) => handleFile(e.target.files[0])}
          type="file"
          className="form-control mt-2"
        />
      </div>
      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-6 col-12"></div>
    </div>
  );
}
