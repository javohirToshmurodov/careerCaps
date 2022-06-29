import React from "react";
import { OutlineBtn } from "../../styles";
import arxitektor from "../../assets/images/arxitektor/arxiektor.svg";
import CardMaker from "../../components/CardMaker";
import bino from "../../assets/images/arxitektor/bino.svg";
import chizmachilik from "../../assets/images/arxitektor/chizmachilik.svg";
import detallar from "../../assets/images/arxitektor/detallar.svg";
import discover from "../../assets/images/arxitektor/discover.svg";
import edx from "../../assets/images/arxitektor/edx.svg";
import innovatsiya from "../../assets/images/arxitektor/innovatsiya.svg";
import layerVeterinar from "../../assets/images/arxitektor/layerVeterinar.svg";
import muammolar from "../../assets/images/arxitektor/muammolar.svg";
import qurilish from "../../assets/images/arxitektor/qurilish.svg";
import rivojlanish from "../../assets/images/arxitektor/rivojlanish.svg";
import sayohat from "../../assets/images/arxitektor/sayohat.svg";
import skillshare from "../../assets/images/arxitektor/skillshare.svg";
import veterinarLayer from "../../assets/images/arxitektor/veterinarLayer.svg";
import xatolik from "../../assets/images/arxitektor/xatolik.svg";
import xavfsizlik from "../../assets/images/arxitektor/xavfsizlik.svg";
import JobsList from "../../components/JobsList";
import check from "../../assets/images/check.svg";
import JobLayer from "../../components/JobLayer";
import Manbalar from "../../components/Manbalar";
import AdvantagesCard from "../../components/AdvantagesCard";
import ForYou from "../../components/ForYou";
import JobsContact from "../../components/JobsContact";
import dasturchi1 from "../../assets/images/dasturchi1.svg";
import dasturchi2 from "../../assets/images/dasturchi2.svg";
import dasturchi3 from "../../assets/images/dasturchi3.svg";
import FrequentlyQuestions from "../../components/FrequentlyQuestions";
import Footer from "../../components/Footer";
export default function Arxitektor() {
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">Arxitektor</h1>
              <p className="subtitle">
                Noyob va yaxshi tashkil etilgan tuzilmalarni yaratish uchun
                binolarni loyihalash uchun mas'ul kasb egasi.{" "}
              </p>
              <OutlineBtn className="mt-4 outBtn">Batafsil</OutlineBtn>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-g col-sm-12 d-flex ps-5 col-12">
              <img src={arxitektor} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container px-5 py-5">
          <h1 className="bigH1">Arxitektor nima vazifani bajaradi?</h1>
        </div>
      </section>
      <section>
        <div className="w-100">
          <div className="row">
            <CardMaker
              img={bino}
              title={"Binolarni loyihalash"}
              description={
                "Kompyuter dasturlari yordamida loyhaning dastlabki dizaynini va eskizini modellashtiradi"
              }
            />
            <CardMaker
              img={qurilish}
              title={"Bino qurilishini nazorati"}
              description={
                "Binoni loihaga binoan qurilayotganini nazorat ostiga oladi"
              }
            />
            <CardMaker
              img={xatolik}
              title={"Xatoliklarni tuzatish"}
              description={
                "Bino qurilishida yoki loyihalashtirishda yuzaga keladigan loyihalardagi xatolarini aniqlash va tuzatish."
              }
            />
            <CardMaker
              img={xavfsizlik}
              title={"Xavfsizlikni ta’minlash"}
              description={
                "Binoni xavfsizligini va iqlim va relyefga chidamliligini ta'minlash"
              }
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5 px-4">
          <h1 className="bigH1 my-5">
            Arxitektor bo'lish uchun nimalarga e'tibor qaratish kerak?
          </h1>
          <div className="row px-2">
            <JobsList
              check={check}
              img={chizmachilik}
              title={"Chizmachilik mahorati"}
              description={
                "Dizayn va chizish arxitektor qiladigan ishning asosiy qismidir. Dizayn qobiliyatlaridan foydalangan holda, arxitektor o'z mijozlari uchun amaliy, hayotiy va vizual binolarning loyihasini ishlab chiqadi."
              }
            />
            <JobsList
              check={check}
              img={detallar}
              title={"Detallarga diqqatli bo'lish"}
              description={
                "Qo'lda chizilgan yoki kompyuterda yaratilgan, arxitektura dizaynlari odatda murakkab bo'ladi. Detallarga e'tibor qaratish qobiliyati arxitektorning qurilish ishlarini bajarayotgan quruvchi va investorning rahbarlik qiladigan amaliy dizaynini yaratishni ta'minlaydi."
              }
            />
            <JobsList
              check={check}
              img={muammolar}
              title={"Muammolarni hal qilish qobiliyati"}
              description={
                "Dizayn rejalarini yaratishda cheklovlar va muammolarga duch kelishadi. Arxitektorlar qurilish byudjeti, materiallar ta'minoti masalalari, kengash qonunchiligi va atrof-muhitga ta'siri kabi cheklovchi omillarni loyihalash uchun muammolarni hal qilish qobiliyatlaridan foydalanadilar."
              }
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <JobLayer
          layer={veterinarLayer}
          title={"Arxitektorlikni qayerdan o'rgansa bo'ladi?"}
        />
      </section>
      <section className="py-5">
        <Manbalar
          firstImg={edx}
          firstTitle={"edX"}
          firstDescription={
            "Har bir inson o'z hayotida, jamiyatida yoki dunyosida o'zgarishlar yaratish imkoniyatiga ega. Ta'limning o'zgartiruvchi kuchi bu potentsialni ochadi. Shunga qaramay, yuqori sifatli ta'lim olish kam sonlilarning imtiyozi bo'lib kelgan. 2012 yilda biz o'rganishda seysmik siljish vaqti ekanligini angladik. Sinab ko'rilgan va to'g'ridan-to'g'ri etakchigacha. Ba'zilar uchun dan 'hamma uchun' ga. "
          }
          secondImg={discover}
          secondTitle={"Discover a hobby"}
          secondDescription={
            "Discover a hobby - onlayn ta'lim platformasi. Platfroma orqali turli sohalarni onlayn shaklda va mutlaqo bepul, istalga vaqtda, istalgan joyda o'rganishingiz mumkin"
          }
          thirdImg={skillshare}
          thirdTitle={"Skill share"}
          thirdDescription={
            "KSkillShare - bu illyustratsiya, dizayn, fotografiya, video, frilanser va boshqa mavzularda ijodiy va qiziquvchan odamlar uchun minglab darslarga ega onlayn o'quv hamjamiyatidir. Skillshare-da a'zolar ilhom topish va ijodiy sayohatlarida keyingi qadamni qo'yish uchun birlashadilar."
          }
        />
      </section>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="bigH1">
            Arxitektor kasbining yaxshi tomonlari qanday?
          </h1>
          <div className="row">
            <AdvantagesCard
              img={innovatsiya}
              title={"INNOVATSIYA VA IJOD"}
              description={
                "Arxitektor turar-joyning uyini, ofis minorasi yoki jamoat kutubxonasini yaratadimi, u yangiliklarga sabab bo'ladi. Ushbu soha o'z-o'zini innovatsiyalarga yo'naltiradi, chunki hech bir loyiha bir xil emas. "
              }
            />
            <AdvantagesCard
              img={sayohat}
              title={"SAYOHAT"}
              description={
                "Masofaviy ish. Dasturchi ishlashi uchun faqat kompyuter kerak bo'lganligi sababli, bunday mutaxassislar odatda ma'lum bir joyga bog'lanmaydi.  "
              }
            />
            <AdvantagesCard
              img={rivojlanish}
              title={"DOIMIY RIVOJLANISH"}
              description={
                "Doimiy rivojlanish. Texnologiya tez o'zgarmoqda. IT ham bir joyda turmaydi, masalan, yangi dasturlash tillari paydo bo'ladi.Dasturchilar zamon bilan hamnafas bo'lishlari kerak "
              }
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <ForYou
          title={"Tanlagan kasbingiz siz uchun qanchalik to'g'ri keladi?"}
          backgroundImage={layerVeterinar}
          subtitle={"Arxitektor sohasi siz uchunmi?"}
          description={
            "Kasbga layoqatlilik testi - 7 ta test savolidan iborat bo'lib, siz tanlagan kasb o'zingiz uchun ruhiy, jisomoniy taraflama to'g'ri yoki noto'g'ri ekanligini aniqlashda yordam beradi."
          }
        />
      </section>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="bigH1">TOP Arxitektorlar</h1>
          <div className="row mt-4 justify-content-center">
            <JobsContact
              img={dasturchi1}
              name={"Axrorxo'ja Yodgorov"}
              title={"EPAM Systems kompaniyasi, Senior Software Engineer"}
            />
            <JobsContact
              img={dasturchi2}
              name={"Durdona Bahronova"}
              title={"Super Dispatch kompaniyasi, Frontend Developer "}
            />
            <JobsContact
              img={dasturchi3}
              name={"Azamat Majidov"}
              title={"UzKassa kompaniyasi, Senior Android Developer "}
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
          <FrequentlyQuestions
            title1={"Arxitektor bo'lish uchun qaysi fanlarni bilish kerak?"}
            description={
              "Arxitektor sohasini egallamoqchi bo'lganllar matematika va ingliz tilidan bilimlarni mustahkamlashlari talab etiladi. Matematika - dasturlashda, kodlarda uchraydigan xatoliklar, muammolarni hal qilishda yordam beradi. Ingliz tili - dasturlash sohasidagi bilimlarni asosiy qismi ingliz tilida bo'lganligi uchun , agar ingliz tilini bilsangiz ko'proq mustaqil ishlay olishingiz va ko'proq bilimga ega bo'lishingiz mumkin."
            }
            title2={
              "Arxitektor bo'lib ishga kirish uchun diplom talab etiladimi?"
            }
            title3={"Arxitektorni o'rtacha maoshi qancha?"}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
