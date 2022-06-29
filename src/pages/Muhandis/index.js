import React from "react";
import muhandis from "../../assets/images/muhandiss.svg";
import muhandiss from "../../assets/images/muhandis/muhandisss.svg";
import { OutlineBtn } from "../../styles";
import CardMaker from "../../components/CardMaker";
import model from "../../assets/images/muhandis/model.svg"
import optimallashtirish from "../../assets/images/muhandis/optimallashtirish.svg"
import texnologiya from "../../assets/images/muhandis/texnologiya.svg"
import yangiliklar from "../../assets/images/muhandis/yangiliklar.svg"
export default function Muhandis() {
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">3D Muhandis</h1>
              <p className="subtitle">
                3D modeler sifatida siz virtual olamlar va belgilar yaratish
                uchun javobgar bo'lasiz. Siz eskizlar va kontseptsiya san'atida
                hayot bilan nafas olasiz.
              </p>
              <OutlineBtn className="mt-4 outBtn">Batafsil</OutlineBtn>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-g col-sm-12 d-flex ps-5 col-12">
              <img src={muhandis} className="img-fluid" alt="" />
              <img src={muhandiss} alt="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container py-5 px-5">
          <h1 className="bigH1">Dasturchi nima vazifani bajaradi?</h1>
        </div>
      </section>
      <section>
        <div className="w-100">
          <div className="row">
          <CardMaker
              img={model}
              title={"Model yaratish"}
              description={
                "Yangi dasturlar uchun kod yozish va sinovdan o'tkazish."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
