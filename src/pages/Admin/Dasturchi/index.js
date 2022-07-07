import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { instance } from "../../../redux/actions";
import { ImgWrapper } from "../../../styles";
import { faL, faPen } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import EditModal from "../../../components/EditModal";
export default function DasturchiChild() {
  const [modal, setModal] = useState(false);
  const [pictureId, setPictureId] = useState("");
  const [image, setImage] = useState("");
  const jobs = useSelector((state) => state.jobsData?.quizzes);
  const handleFile = (e) => {
    const formData = new FormData();
    formData.append("files", e);
    instance
      .post("api/v1/file/saveAttachments", formData)
      .then((res) => {
        console.log(res.data.data);
        setPictureId(res?.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateProfile = () => {
   return setModal(true);
    
  };
  const getAttachments = () => {
    instance
      .get(`api/v1/file/get/${pictureId}`)
      .then((res) => {
        console.log(res.data);
        setImage(res.data);
        console.log("image", image);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(jobs[5]);
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-6 col-12">
          <ImgWrapper>
            <img
              className="img-fluid"
              src={`http://ec2-35-158-135-234.eu-central-1.compute.amazonaws.com/api/v1/file/get/07543971-9441-4bb5-92d4-52c1331672ff`}
              alt=""
            />
          </ImgWrapper>
          <h3>Dasturchi</h3>
          {/* <input
          onChange={(e) => handleFile(e.target.files[0])}
          type="file"
          className="form-control mt-2"
        /> */}
          <button className="btn btn-info text-white" onClick={updateProfile}>
            <FontAwesomeIcon icon={faPen} />
          </button>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-6 col-12"></div>
      </div>

      {modal ? (
        <EditModal
          setModal={setModal}
          pictureId={"07543971-9441-4bb5-92d4-52c1331672ff"}
          quizId={"f2fe64a8-d6a3-4337-add7-24c580b09532"}
        />
      ) : (
        ""
      )}
    </>
  );
}
