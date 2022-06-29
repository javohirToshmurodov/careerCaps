import React from "react";
import about from "../../assets/images/contact/about.svg";
import networks from "../../assets/images/contact/networks.svg";
import Footer from "../../components/Footer";
export default function Contact() {
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">CareerCaps</h1>
              <p className="subtitle">Kelajak kasbingizni biz bilan tanlang</p>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-g col-sm-12   col-12">
              <img className="img-fluid" src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="networksSection">
        <div className="container px-5 py-5 d-flex justify-content-center align-items-center flex-column text-center">
          <div>
            <img src={networks} alt="networks" />
            <h1 className="defaultH1 mt-4 mb-3">Admin bilan aloqa</h1>
            <p className="fw-400">(+998 90) 977-19-60)</p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
