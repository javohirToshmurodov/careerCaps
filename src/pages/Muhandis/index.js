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
import Manbalar from "../../components/Manbalar";
import skilline from "../../assets/images/muhandis/skilline.svg";
import skillbox from "../../assets/images/muhandis/skillbox.svg";
import school from "../../assets/images/muhandis/logoBlack.svg";
import AdvantagesCard from "../../components/AdvantagesCard";
import zamonaviy from "../../assets/images/muhandis/zamonaviy.svg";
import masofaviy from "../../assets/images/muhandis/masofaviy.svg";
import rivojlanish from "../../assets/images/muhandis/rivojlanish.svg";
import ForYou from "../../components/ForYou";
import forLayer from "../../assets/images/muhandis/forlayerMuhandis.svg";
import JobsContact from "../../components/JobsContact";
import muhandis1 from "../../assets/images/dasturchi1.svg";
import muhandis2 from "../../assets/images/dasturchi2.svg";
import muhandis3 from "../../assets/images/dasturchi3.svg";
import Footer from "../../components/Footer";
import FrequentlyQuestions from "../../components/FrequentlyQuestions";
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
      <section className="py-5">
        <Manbalar
          firstImg={skilline}
          firstTitle={"Skilline"}
          firstDescription={
            "HTMLdan Pythongacha bo'lgan hamma narsani qamrab olgan holda, u ishlab chiquvchilar uchun o'z loyihalarini  yaratish uchun foydali ma'lumot manbasidir. W3Schools-ning ajoyib tomoni shundaki, veb-saytda o'rnatilgan Google Translate funksiyasi mavjud. Shunday qilib, ingliz tilini bilmaydiganlar o'z ona tillaridan foydalangan holda kodlashni o'rganishlari mumkin."
          }
          secondImg={school}
          secondTitle={"XYZ school"}
          secondDescription={
            "Khan Academy yangi boshlanuvchilar uchun bepul kodlashni o'rganish uchun ajoyib resurslarni taklif etadi. Mavzular asosan kompyuter dasturlashning asosiy tamoyillari, HTML, CSS, JavaScript, jQuery va SQL. Khan Academy shuningdek, Hour of Code deb nomlangan qisqa va interaktiv dasturga ega."
          }
          thirdImg={skillbox}
          thirdTitle={"Skillbox"}
          thirdDescription={
            "Udemy - 130 000+ onlayn kurslarga ega onlayn ta'lim portali. Ularning aksariyati pullik bo'lsa-da, minglab bepul variantlar ham mavjud."
          }
        />
      </section>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="bigH1">
            3D muhandis kasbining yaxshi tomonlari qanday?
          </h1>
          <div className="row">
            <AdvantagesCard
              img={zamonaviy}
              title={"ZAMONAVIY KASB"}
              description={
                "Ijodiy maydon va aniq natijalar. Kod yozish qobiliyati cheksiz imkoniyatlar maydonini ochadi. Dasturchilar ilovalar va dasturlar yaratadilar va turli vazifalarni avtomatlashtiradilar."
              }
            />
            <AdvantagesCard
              img={masofaviy}
              title={"MASOFAVIY ISH"}
              description={
                "Masofaviy ish. Dasturchi ishlashi uchun faqat kompyuter kerak bo'lganligi sababli, bunday mutaxassislar odatda ma'lum bir joyga bog'lanmaydi. "
              }
            />
            <AdvantagesCard
              img={rivojlanish}
              title={"DOIMIY RIVOJLANISH"}
              description={
                "Doimiy rivojlanish. Texnologiya tez o'zgarmoqda. IT ham bir joyda turmaydi, masalan, yangi dasturlash tillari paydo bo'ladi.Dasturchilar zamon bilan hamnafas bo'lishlari kerak"
              }
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <ForYou
          title={"Tanlagan kasbi ngiz siz uchun qanchalik to'g'ri keladi?"}
          backgroundImage={forLayer}
          subtitle={"3D muhandis sohasi siz uchunmi?"}
          description={
            "Kasbga layoqatlilik testi - 7 ta test savolidan iborat bo'lib, siz tanlagan kasb o'zingiz uchun ruhiy, jisomoniy taraflama to'g'ri yoki noto'g'ri ekanligini aniqlashda yordam beradi."
          }
        />
      </section>
      <section className="py-5">
        <div className="container px-5">
          <div className="bigH1">TOP 3D muhandislar</div>
          <div className="row mt-4 justify-content-center">
            <JobsContact
              img={muhandis1}
              name={"Axrorxo'ja Yodgorov"}
              title={"EPAM Systems kompaniyasi,Senior Software Engineer "}
            />
            <JobsContact
              img={muhandis2}
              name={"Durdona Bahronova"}
              title={"Super Dispatch kompaniyasi, Frontend Developer "}
            />
            <JobsContact
              img={muhandis3}
              name={"Azamat Majidov"}
              title={"UzKassa kompaniyasi, Senior Android Developer "}
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
          <FrequentlyQuestions
            title1={
              "3D muhandis bo'lish uchun qaynday bilim va ko'nikmalar kerak?"
            }
            description={
              "3d muhandis bo'lish uchun avvalo o'zingiz bo'lmoqchi bo'lgan psixolog turini tanlab olishingiz kerak. Psixologlarni ham bir qanhca turlari bor.Masalan: klinik psiholog, konsultant psiholog, maktab psixologi."
            }
            title2={
              "3D muhandis bo'lib ishga kirish uchun diplom talab etiladimi?"
            }
            title3={"3D muhandislarni o'rtacha maoshi qancha?"}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
