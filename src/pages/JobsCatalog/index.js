import React from "react";
import mainPic from "../../assets/images/jobsCatalog.png";
import SearchForm from "../../components/SearchForm";
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
          <div className="row">
            <div className="col-12 text-white">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
