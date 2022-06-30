import React from "react";
import statistic from "../../assets/images/statistika.svg";
import CardMini from "../../components/CardMini";
import jami from "../../assets/images/statistika/jami.svg";
import boy from "../../assets/images/statistika/boy.svg";
import girl from "../../assets/images/statistika/girl.svg";
import crown from "../../assets/images/statistika/crown.svg";
import CardWrapper from "../../components/CardWrapper";
import psixolog from "../../assets/images/psixolog.svg";
import dasturchi from "../../assets/images/dasturchi.svg";
import veterinar from "../../assets/images/veterinar.svg";
export default function Statistics() {
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">CareerCaps</h1>
              <p className="subtitle">Kelajak kasbingizni biz bilan tanlang</p>
            </div>
            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-column col-xl-g col-sm-12   col-12">
              <img className="img-fluid" src={statistic} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="colorH1">Testda qatnashganlar soni</h1>
          <div className="row mt-4">
            <CardMini kim={"Jami"} img={jami} soni={"100"} />
            <CardMini kim={"Erkaklar soni"} img={boy} soni={"70"} />
            <CardMini kim={"Ayollar soni"} img={girl} soni={"30"} />
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="colorH1">Eng ko'p ishlangan testlar</h1>
          <div className="row mt-4">
            <CardWrapper img={psixolog} jobName={"Psixolog"} crown={crown} />
          </div>
        </div>
      </section>
    </>
  );
}
