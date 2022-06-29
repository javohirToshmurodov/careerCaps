import React from "react";
import muhandis from "../../assets/images/muhandiss.svg";
import muhandiss from "../../assets/images/muhandis/muhandisss.svg";
import { OutlineBtn } from "../../styles";
import CardMaker from "../../components/CardMaker";
import model from "../../assets/images/muhandis/model.svg";
import optimallashtirish from "../../assets/images/muhandis/optimallashtirish.svg";
import texnologiya from "../../assets/images/muhandis/texnologiya.svg";
import yangiliklar from "../../assets/images/muhandis/yangiliklar.svg";
import check from "../../assets/images/check.svg";
import chizmachilik from "../../assets/images/muhandis/chizmachilik.svg";
import dmodel from "../../assets/images/muhandis/3dmodel.svg";
import simulatsiya from "../../assets/images/muhandis/simulatsiya.svg";
import JobsList from "../../components/JobsList";
import JobLayer from "../../components/JobLayer";
import layerMuhandis from "../../assets/images/muhandis/layerMuhandis.svg";
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
                "Virtual personajlar, turli narsalarning virtual modellarini yaratadi."
              }
            />
            <CardMaker
              img={optimallashtirish}
              title={"Optimallashtirish"}
              description={
                "Optimallashtirilgan 2D va 3D formatida real vaqt rejimida renderlash algoritmlarini ishlab chiqish."
              }
            />
            <CardMaker
              img={texnologiya}
              title={"Texnologiya"}
              description={
                "Sun'iy yo'ldosh tasvirlari, 3D relyef va diqqatga sazovor joylar va geografik vektor ma'lumotlari."
              }
            />
            <CardMaker
              img={yangiliklar}
              title={"Yangiliklar bilan tanishish"}
              description={
                "3D dizayn, suratga olish va modellashtirish vositalari va texnologiyalaridagi so‘nggi ishlanmalardan xabardor bo‘lib borish"
              }
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container px-4 py-5">
          <h1 className="bigH1 my-5">
            3D Muhandis bo'lish uchun nimalarga e'tibor qaratish kerak?
          </h1>
          <div className="row px-2">
            <JobsList
              check={check}
              img={chizmachilik}
              title={"Chizmachilik qobiliyati"}
              description={
                "Obyektning o'lchamini, shaklini, tashqi ko'rinishini va uning boshqa xususiyatlarini maksimal aniqlik bilan namoyish qilish imkonini beruvchi virtual modellarni shakllantirish jarayoni."
              }
            />
            <JobsList
              check={check}
              img={dmodel}
              title={"3D modellash uchun dasturlar"}
              description={
                "Birinchi toifadagi yetakchilar orasida 3D max , Maya, AutoCad, Cinema 4D, Compass 3D, ikkinchisiga esa Blender 3D modellashtirish , Wings3D va Google SketchUp kiradi."
              }
            />
            <JobsList
              check={check}
              img={simulatsiya}
              title={"Simulyatsiya turlari"}
              description={
                "Modellashtirish - bu modellarni yaratish uchun geometrik shakllar va chiziqlar bilan turli xil nuqtalar to'plamining kombinatsiyasi"
              }
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <JobLayer
          layer={layerMuhandis}
          title={"3D muhandislikni qayerdan o'rgansa bo'ladi?"}
        />
      </section>
    </>
  );
}
