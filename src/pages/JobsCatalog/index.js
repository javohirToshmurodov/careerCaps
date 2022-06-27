import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import mainPic from "../../assets/images/jobsCatalog.png";
import SearchForm from "../../components/SearchForm";
import jobs from "../../data/jobs";
export default function JobsCatalog() {
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div class="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">Kasblar ro'yxati</h1>
              <p className="subtitle">Kelajak kasbingizni biz bilan tanlang</p>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-g col-sm-12   col-12">
              <img className="img-fluid" src={mainPic} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container px-5 py-5">
          <SearchForm />
          <div className="row px-3">
            <div className="col-12 ">
              {jobs.map((e, i) => (
                <div
                  className="row pt-3 pb-3 align-items-center jobsCard   ps-4 pe-0 mt-4"
                  key={i}
                >
                  <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
                    <e.image />
                  </div>
                  <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                    <h1 className="defaultH1">{e.jobName}</h1>
                    <p className="mt-4 defaultP">{e.workFrom}</p>
                    <div className="d-flex gap-5 jobsButton">
                      <button className="onlineButton">
                        Online <FontAwesomeIcon icon={faCheckCircle} />{" "}
                      </button>
                      <button className="offlineButton">Offline</button>
                    </div>
                  </div>
                  <div className="col-12 pb-2 col-xl-5 col-lg-5 col-md-6 col-sm-12 align-self">
                    <p className="defaultP ">Yillik maosh</p>
                    <h1 className="salaryH1">{e.salary}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
