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
import ProgressCard from "../../components/ProgressCard";
import jamii from "../../assets/images/statistika/jamii.svg";
import erkaklar from "../../assets/images/statistika/erkaklar.svg";
import ayollar from "../../assets/images/statistika/ayollar.svg";
import thirty from "../../assets/images/statistika/thirty.svg";
import seventy from "../../assets/images/statistika/seventy.svg";
import Footer from "../../components/Footer";

import { useState } from "react";
import { instance } from "../../redux/actions";
import { useEffect } from "react";
import { CardMiniWrapper } from "../../styles";
import { Spin } from "antd";
export default function Statistics() {
  const [statistics, setStatistics] = useState({})
  const [loader, setLoader] = useState(false)

  const getStatistics = () => {
    setLoader(true)
    instance.get("api/v1/statistics").then((res) => {
      console.log(res.data.data);
      setStatistics({ ...res.data.data })
      setLoader(false)
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    getStatistics()
    console.log(statistics.topQuizes);
    console.log(statistics);
  }, [])
  return (
    <Spin spinning={loader}>
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
            <CardMini kim={"Jami"} img={jami} soni={statistics.allMembers} />
            <CardMini kim={"Erkaklar soni"} img={boy} soni={statistics.males} />
            <CardMini kim={"Ayollar soni"} img={girl} soni={statistics.females} />
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="colorH1">Eng ko'p ishlangan testlar</h1>
          <div className="row mt-4">
            {statistics?.topQuizes?.map((e, i) => <CardWrapper img={e.attachment} jobName={e.name} crown={crown} />)}
            {/* <CardWrapper img={psixolog} jobName={"Psixolog"} crown={crown} />
            <CardWrapper img={dasturchi} jobName={"Dasturchi"} crown={crown} />
            <CardWrapper img={veterinar} jobName={"Veterinar"} crown={crown} /> */}
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="colorH1">Testlar statistikasi</h1>
          <div className="row mt-4">
            <ProgressCard img2={""} img={jamii} title={"Jami"} soni={statistics.allTests} />
            <ProgressCard
              img2={thirty}
              img={erkaklar}
              title={"Muvaffaqiyatli"}
              soni={statistics.successTests}
            />
            <ProgressCard
              img2={seventy}
              img={ayollar}
              title={"Muvaffaqiyatsiz"}
              soni={statistics.failedCount}
            />
          </div>
        </div>
      </section>
      <Footer />
    </Spin>
  );
}
