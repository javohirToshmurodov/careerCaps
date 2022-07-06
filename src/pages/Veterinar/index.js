import React from "react";
import { OutlineBtn } from "../../styles";
import veterinar from "../../assets/images/veterinar/veterinar.svg";
import CardMaker from "../../components/CardMaker";
import davolash from "../../assets/images/veterinar/davolash.svg";
import xavfsizlik from "../../assets/images/veterinar/xavfsizlik.svg";
import tekshiruv from "../../assets/images/veterinar/tekshiruvlar.svg";
import emlash from "../../assets/images/veterinar/emlash.svg";
import cursera from "../../assets/images/veterinar/cursera.svg";
import ecornel from "../../assets/images/veterinar/ecornel.svg";
import konikma from "../../assets/images/veterinar/konikma.svg";
import muloqot from "../../assets/images/veterinar/muloqot.svg";
import texnologiya from "../../assets/images/veterinar/texnologiya.svg";
import shaxsiy from "../../assets/images/veterinar/shaxsiy.svg";
import talab from "../../assets/images/veterinar/talab.svg";
import olimxavf from "../../assets/images/veterinar/olimxavf.svg";
import layerVeterinar from "../../assets/images/veterinar/layerVeterinar.svg";
import veterinarLayer from "../../assets/images/veterinar/veterinarLayer.svg";
import JobsList from "../../components/JobsList";
import check from "../../assets/images/check.svg";
import JobLayer from "../../components/JobLayer";
import Manbalar from "../../components/Manbalar";
import udemy from "../../assets/images/udemy.svg";
import AdvantagesCard from "../../components/AdvantagesCard";
import ForYou from "../../components/ForYou";
import veterinar1 from "../../assets/images/veterinar/veterinar1.svg";
import veterinar2 from "../../assets/images/veterinar/veterinar2.svg";
import veterinar3 from "../../assets/images/veterinar/veterinar3.svg";
import JobsContact from "../../components/JobsContact";
import FrequentlyQuestions from "../../components/FrequentlyQuestions";
import Footer from "../../components/Footer";
export default function Veterinar() {
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">Veterinar</h1>
              <p className="subtitle">
                3D modeler sifatida siz virtual olamlar va belgilar yaratish
                uchun javobgar bo'lasiz. Siz eskizlar va kontseptsiya san'atida
                hayot bilan nafas olasiz.
              </p>
              <OutlineBtn className="mt-4 outBtn">Batafsil</OutlineBtn>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-g col-sm-12 d-flex ps-5 col-12">
              <img src={veterinar} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container py-5 px-5">
          <h1 className="bigH1">Veterinar nima vazifani bajaradi?</h1>
        </div>
      </section>
      <section>
        <div className="w-100">
          <div className="row">
            <CardMaker
              img={davolash}
              title={"Hayvonlarni davolash"}
              description={
                "Kasal yoki jarohatlangan hayvonlarga dori-darmonlarni tavsiya qiladi, yaralarni bog'laydi, operatsiya qiladi"
              }
            />
            <CardMaker
              img={xavfsizlik}
              title={"Xavfsizlikni ta'minlash"}
              description={
                "Hayvonlardan odamlarga yuqadigan kasalliklar va infektsiyalar haqida jamoatni ogohlantiradi "
              }
            />
            <CardMaker
              img={tekshiruv}
              title={"Tekshiruvlar o'tkazish"}
              description={
                "Laboratoriya sinovlarini o'tkazadi. Diagnostik ko'rish va ultratovush tekshiruvlarini o'tkazadi"
              }
            />
            <CardMaker
              img={emlash}
              title={"Emlash"}
              description={
                "Muntazam emlashni targ'ib qilish . Mijozlarni uy hayvonlari uchun ijobiy ovqatlanish va turmush tarzini tanlashga o'rgatish orqali profilaktik yordamni targ'ib qiladi."
              }
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container px-4 py-5">
          <h1 className="bigH1 my-5">
            Veterinar bo'lish uchun nimalarga e'tibor qaratish kerak?
          </h1>
          <div className="row px-2">
            <JobsList
              check={check}
              img={muloqot}
              title={"Muloqot ko'nikmalari"}
              description={
                "Uy hayvonlariga ham, ularning egalariga ham yaxshi muloqotda bo'lish"
              }
            />
            <JobsList
              check={check}
              img={konikma}
              title={"Hayvonlar bilan ishlash ko'nikmalari"}
              description={
                "Hayvonlarni tushunish, ularga yaxshi va ehtiyotkorona munosabatda bo'lish, ularning hatti-harakatlarini bilish"
              }
            />
            <JobsList
              check={check}
              img={texnologiya}
              title={"Texnologiyadan xabardor bo'lish"}
              description={
                "Hayvonlarning diagnostikasi, tadqiqoti va jarrohligida tibbiy texnologiyalardan foydalanish qobiliyati"
              }
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <JobLayer
          layer={layerVeterinar}
          title={"3D muhandislikni qayerdan o'rgansa bo'ladi?"}
        />
      </section>
      <section className="py-5">
        <Manbalar
          firstImg={cursera}
          firstTitle={"Courcera"}
          firstDescription={
            "Coursera -   2012 yilda Stenford universiteti kompyuter fanlari bo'yicha  professor Endryu NG va Dafne Koller tomonidan tashkil etilgan. Coursera universitetlar va boshqa tashkilotlar bilan turli xil fanlar bo'yicha onlayn kurslar tashkil qilish, sertifikat va imtiyozlar taqdim etuvchi platforma"
          }
          secondImg={udemy}
          secondTitle={"Udemy"}
          secondDescription={
            "Udemy - 130 000+ onlayn kurslarga ega onlayn ta'lim portali. Ularning aksariyati pullik bo'lsa-da, minglab bepul variantlar ham mavjud."
          }
          thirdImg={ecornel}
          thirdTitle={"eCornell"}
          thirdDescription={
            "eCornell - Cornell universitetining onlayn ta'lim platformasi hisbolanadi. Kornell universiteti 180 dan ortiq malakatda mavjud. eCornell turli sohalarda professional onlayn kurslarni taqdim etadi"
          }
        />
      </section>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="bigH1">
            Veterinar kasbining yaxshi tomonlari qanday?
          </h1>
          <div className="row">
            <AdvantagesCard
              img={olimxavf}
              title={"O'LIM XAVFINING PASTLIGI"}
              description={
                "O'lim xavfining pastligi - go'shtni iste'mol qilishning hech qanday yomon joyi yo'q, ammo tadqiqotlar shuni ko'rsatadiki, vegetarian bo'lish juda ko'p cheksiz afzalliklarga ega, ular vegetarianlar umuman sog'lomroq va hatto uzoqroq yashaydilar. Katta tadqiqotga ko'ra, vegetarianlar 20% ko'proq yashaydi"
              }
            />
            <AdvantagesCard
              img={talab}
              title={"BU KASBDA TALAB YUQORILIGI"}
              description={
                "So'nggi bir necha o'n yilliklarda veterinariya tibbiyoti sezilarli darajada rivojlandi. Bir paytlar inson salomatligini muhofaza qilish uchun ajratilgan muolajalar endi veterinariya amaliyotiga, jumladan, ekokardiyogramlar kabi ilg'or diagnostika muolajalariga tarqaldi. Hayvonlarni parvarish qilish standartlari doimiy ravishda oshib borishi sababli veterinarlarga qo'shimcha ehtiyoj bor."
              }
            />
            <AdvantagesCard
              img={shaxsiy}
              title={"SHAXSIY BIZNES IMKONIYATI"}
              description={
                "Veterinariya tibbiyoti yuqori maoshli ish haqi taklif qilishi mumkin bo'lgan hayvonlar kasblaridan biridir. Veterinariya shifokorlari 2019 yil boshidan boshlab (AQSHda) o'rtacha 89 000 AQSh dollari miqdorida maosh oladilar,  yillik maoshi yiliga 50 000 dan 200 000 dollargacha. Qo'shimcha mutaxassislik tayyorgarligi yoki kengash sertifikatiga ega bo'lganlar yanada yuqori maosh olishlari mumkin."
              }
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <ForYou
          title={"Veterinar sohasi siz uchunmi?"}
          backgroundImage={veterinarLayer}
          subtitle={"Tanlagan kasbingiz siz uchun qanchalik to'g'ri keladi?"}
          description={
            "Kasbga layoqatlilik testi - 7 ta test savolidan iborat bo'lib, siz tanlagan kasb o'zingiz uchun ruhiy, jisomoniy taraflama to'g'ri yoki noto'g'ri ekanligini aniqlashda yordam beradi."
          }
        />
      </section>
      <section className="py-5">
        <div className="container px-5">
          <div className="bigH1">TOP Veterinar muhandislar</div>
          <div className="row mt-4 justify-content-center">
            <JobsContact
              img={veterinar1}
              name={"Megan Brashear"}
              title={"Amerikaning eng yaxshi  top 10 taligidan o'rin olgan "}
            />
            <JobsContact
              img={veterinar2}
              name={"Kim Knap"}
              title={"Amerikaning 'Hero Dog Awards' mukofoti sovrindori. "}
            />
            <JobsContact
              img={veterinar3}
              name={"Victoria Smith"}
              title={
                "Shu sohada 2013-yildan beri o'z faoliyatini yuritib kelmoqda "
              }
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
          <FrequentlyQuestions
            title1={
              "Veterinar bo'lish uchun qaynday bilim va ko'nikmalar kerak?"
            }
            description={
              "Veterinar bo'lish uchun avvalo o'zingiz bo'lmoqchi bo'lgan psixolog turini tanlab olishingiz kerak. Psixologlarni ham bir qanhca turlari bor.Masalan: klinik psiholog, konsultant psiholog, maktab psixologi."
            }
            title2={
              "Veterinar bo'lib ishga kirish uchun diplom talab etiladimi?"
            }
            title3={"Veterinarlarni o'rtacha maoshi qancha?"}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
