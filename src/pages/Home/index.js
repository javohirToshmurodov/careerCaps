import React from "react";
import { OutlineBtn } from "../../styles";
import MainImg from "../../assets/images/main.png";
import CardMaker from "../../components/CardMaker";
import first from "../../assets/images/1.png";
import second from "../../assets/images/2.png";
import third from "../../assets/images/3.png";
import fourth from "../../assets/images/4.png";
import networks from "../../assets/images/networks.png";
import position from "../../assets/images/positionPic.png";
import Footer from "../../components/Footer";
export default function Home() {
  
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div class="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">CareerCaps</h1>
              <p className="subtitle">Kelajak kasbingizni biz bilan tanlang</p>
              <OutlineBtn className="mt-4 outBtn">Test</OutlineBtn>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-g col-sm-12   col-12">
              <img className="img-fluid" src={MainImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="w-100">
          <div className="row">
            <CardMaker
              img={first}
              title={"10+ Kasblar"}
              description={
                "Zamon talabiga javob beruvchi, yaqin yillar orasida ommalashgan va zamonaviy kasblar haqida ma'lumot."
              }
            />
            <CardMaker
              img={second}
              title={"50+ ma'lumotlar"}
              description={
                "Kasblar haqidagi foydali ma'lumot , maqola va faktlar jamlanmasi"
              }
            />
            <CardMaker
              img={third}
              title={"100+ foydalanuvchilar "}
              description={
                "Hozirgi kunga qadar saytga tashrif buyurganlar soni"
              }
            />
            <CardMaker
              img={fourth}
              title={"Test sinovlari"}
              description={
                "Foydalanuvchining qaysi kasbga layoqatli ekanligini aniqlashtirish uchun maxsus test sinovlari"
              }
            />
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center align-items-center flex-column careerCapsBg">
        <div className="container text-white text-center px-5">
          <h1 className="defaultH1 ">CareerCaps</h1>
          <p className="mt-3">
            Saytda zamonaviy kasblarga alohida e'tibor berilgan bo'lib, siz bu
            saytda ko'rgan istalgan kasbingiz kelajak kasbi ekanligiga biz
            taqdim etgan ma'lumotlar orqali bilib olishingiz va o'z
            kelajagingizni shu kasb bilan davom ettirishingiz mumkin!
          </p>
          <OutlineBtn className="mt-4 outBtn">Kasblar Katalogi</OutlineBtn>
        </div>
      </section>
      <section className="networksSection">
        <div className="container px-5 py-5 d-flex justify-content-center align-items-center flex-column text-center">
          <div>
            <img src={networks} alt="networks" />
            <h1 className="defaultH1 mt-4 mb-3">Admin bilan aloqa</h1>
            <p className="fw-400">(+998 90) 977-19-60)</p>
          </div>
          <img src={position} className="positionImage position-absolute end-0 img-fluid " alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}
