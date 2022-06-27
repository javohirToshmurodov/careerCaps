import React from "react";
import { OutlineBtn } from "../../styles";
import dasturchii from "../../assets/images/dasturchii.svg";
import CardMaker from "../../components/CardMaker";
import dasturYangilash from "../../assets/images/dastur_yangilash.svg";
import dasturYaratish from "../../assets/images/dastur_yaratish.svg";
import xavfsizlik from "../../assets/images/xavfsizlik.svg";
import xatolik from "../../assets/images/xatolik_tuzatish.svg";
import JobsList from "../../components/JobsList";
import check from "../../assets/images/check.svg";
import muammolar from "../../assets/images/muammolar.svg";
import kompyuterda from "../../assets/images/kompyuterda.svg";
import matematik from "../../assets/images/matematik.svg";
import JobLayer from "../../components/JobLayer";
import dasturchiLayer from "../../assets/images/dasturchiLayer.svg";
import Manbalar from "../../components/Manbalar";

export default function Dasturchi() {
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div class="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">Dasturchi</h1>
              <p className="subtitle">
                Dasturiy ta'minot uchun kod yozuvchi va sinovdan o'tkazuvchi
                mutaxassis
              </p>
              <OutlineBtn className="mt-4 outBtn">Batafsil</OutlineBtn>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-g col-sm-12 d-flex ps-5 col-12">
              <img src={dasturchii} className="img-fluid" alt="" />
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
              img={dasturYaratish}
              title={"Dastur yaratish"}
              description={
                "Yangi dasturlar uchun kod yozish va sinovdan o'tkazish."
              }
            />
            <CardMaker
              title={"Dasturlarni yangilash"}
              img={dasturYangilash}
              description={"Mavjud dasturlarni yangilash."}
            />
            <CardMaker
              title={"Xatoliklarni tuzatish"}
              img={xatolik}
              description={"Kodlardagi xatolarini aniqlash va tuzatish."}
            />
            <CardMaker
              title={"Xavfsizlikni ta’minlash"}
              img={xavfsizlik}
              description={"Kiberxavfsizlik tahdidlariga qarshi himoyalash."}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5 px-4">
          <h1 className="bigH1 my-5">
            Dasturchi bo'lish uchun nimalarga e'tibor qaratish kerak?
          </h1>
          <div className="row px-2">
            <JobsList
              check={check}
              img={matematik}
              title={"Matematik masalalarda donolik"}
              description={
                "Dasturlashning asosiy maqsadi har xil turdagi matematik muammolarni hal qilishdir.Dasturlash olamida iloji boricha ko'proq matematik muammolarni hal qila oladigankishi ilgari suradi."
              }
            />
            <JobsList
              check={check}
              img={muammolar}
              title={"Muammolarni hal qilish bo'yicha tezkor bilim"}
              description={
                "Bu dasturlash mahorati bo'lib, undan qochib qutula olmaysiz. Muammolarni darhol halqilish uchun ko'p bilimga ega bo'lish kerak."
              }
            />
            <JobsList
              check={check}
              img={kompyuterda}
              title={"Kompyuterda ishlash ko'nikmalari"}
              description={
                "Dasturchining birinchi va asosiy vazifasi kompyuter ustidan o'z nazoratini o'rnatishdir. Kompyuterdagi barcha bilimlar o'z ichida bo'lishi kerak. Asosiy vazifa kompyuterni butunlay sizning nazoratingiz ostiga olishdir."
              }
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <JobLayer
          layer={dasturchiLayer}
          title={"Dasturlashni qayerdan o'rgansa bo'ladi?"}
        />
      </section>
      <section className="py-5">
        <Manbalar />
      </section>
    </>
  );
}
