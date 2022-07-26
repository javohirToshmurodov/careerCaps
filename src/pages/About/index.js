import React from "react";
import { AboutPageWrapper } from "../../styles";
import bg from "../../assets/images/backgroundAbout.svg";
import position from "../../assets/images/positionPic.png";
import networks from "../../assets/images/networks.png";
import Footer from "../../components/Footer";
export default function About() {
  return (
    <>
      <div
        className="minHeightAbout bg-dark"
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <AboutPageWrapper>
          <h1 className="aboutH1">Loyiha haqida </h1>
          <div className="maxWidthPAbuot">
            <p>
              CareerCaps platformasi - har bir foydalanuvchi uchun mo'ljallangan
              platforma. Bu platforma orqali foydalanuvchi turli kasblar haqida
              ma'lumotlarga ega bo'lishi, ulardan foydalanishi, test sinovlari
              orqali o'z tanlagan kasbi o'zi uchun qanchalik mos kelishi haqida
              bilib olishi mumkin
            </p>
          </div>
        </AboutPageWrapper>
      </div>
      <section className="networksSection">
        <div className="container px-5 py-5 d-flex justify-content-center align-items-center flex-column text-center">
          <div>
            <img src={networks} alt="networks" />
            <h1 className="defaultH1 mt-4 mb-3">Admin bilan aloqa</h1>
            <p className="fw-400">(+998 90) 977-19-60</p>
          </div>
          <img
            src={position}
            className="positionImage position-absolute end-0 img-fluid "
            alt=""
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
