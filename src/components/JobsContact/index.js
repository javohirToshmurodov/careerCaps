import {
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { JobsContactWrapper } from "../../styles";

export default function JobsContact(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 soya py-5">
      <JobsContactWrapper>
        <div className="circleImage">
          <img src={props.img} alt="" />
        </div>
          <h4 className="mt-3 mx-3 nameH3">{props.name}</h4>
        <div className="px-4">
          <p className="titleH3">{props.title}</p>
          <div className="d-flex justify-content-center gap-3">
            <div className="circleIcon">
              <a href={props.telegram}>
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
            <div className="circleIcon">
              <a href={props.linkedIn}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="circleIcon">
              <a href={props.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </JobsContactWrapper>
    </div>
  );
}
