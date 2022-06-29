import React from "react";
import { OutlineBtn } from "../../styles";
import psixolog from "../../assets/images/psixologg.svg";
import ruhiyyordam from "../../assets/images/psixolog/ruhiyyordam.svg";
import amaliyyordam from "../../assets/images/psixolog/amaliyyordam.svg";
import ijobiytest from "../../assets/images/psixolog/ijobiytest.svg";
import treninglar from "../../assets/images/psixolog/treninglar.svg";
import CardMaker from "../../components/CardMaker";
import shaxslararo from "../../assets/images/psixolog/shaxslararo.svg";
import empatiya from "../../assets/images/psixolog/empatiya.svg";
import tanqidiy from "../../assets/images/psixolog/tanqidiy.svg";
import check from "../../assets/images/check.svg";
import JobsList from "../../components/JobsList";
import psixologLayer from "../../assets/images/psixolog/psixologLayer.svg";
import JobLayer from "../../components/JobLayer";
import Manbalar from "../../components/Manbalar";
import psychology from "../../assets/images/psixolog/pychology.svg";
import free from "../../assets/images/psixolog/free.svg";
import tutorial from "../../assets/images/psixolog/tutorial.svg";
import timetable from "../../assets/images/psixolog/timetable.svg";
import biznes from "../../assets/images/psixolog/biznes.svg";
import tanishlar from "../../assets/images/psixolog/tanishlar.svg";
import AdvantagesCard from "../../components/AdvantagesCard";
import layerPsixolog from "../../assets/images/psixolog/layerPsixolog.svg";
import ForYou from "../../components/ForYou";
export default function Psixolog() {
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div class="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">Psixolog</h1>
              <p className="subtitle">
                Odamlarga o'z xatti-harakatlarini tushunish va o'zgartirishga
                yordam berish uchun inson ongini ilmiy nuqtai nazardan
                o'rganadi.
              </p>
              <OutlineBtn className="mt-4 outBtn">Batafsil</OutlineBtn>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-g col-sm-12   col-12">
              <img src={psixolog} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container py-5 px-5">
          <h1 className="bigH1">Psixolog nima vazifani bajaradi?</h1>
        </div>
      </section>
      <section>
        <div className="w-100">
          <div className="row">
            <CardMaker
              img={ruhiyyordam}
              title={"Ruhiy yordam"}
              description={
                "Psixologlar odamlarga stressli vaziyatlarni engishga yordam beradi"
              }
            />
            <CardMaker
              title={"Ijobiy test"}
              img={ijobiytest}
              description={
                "Ushbu testlar intellektual qobiliyatlarni, insonlarning kuchli va zaif tomonlarini, kasbiy qobiliyat va afzalliklarni aniqlab beradi"
              }
            />
            <CardMaker
              title={"Amaliy yordam"}
              img={amaliyyordam}
              description={
                "Shifoxonalarda, maktablarda yoki xususiy muassasalarda ruhiy salomatlik yordamini ko'rsatadi"
              }
            />
            <CardMaker
              title={"Treninglar"}
              img={treninglar}
              description={
                "Treninglar, tadqiqot o'tkazadi, ijtimoiy tarmoqlarda o'z sahifalarini yuritadi"
              }
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5 px-4">
          <h1 className="bigH1 my-5">
            Psixolog bo'lish uchun nimalarga e'tibor qaratish kerak?
          </h1>
          <div className="row px-2">
            <JobsList
              check={check}
              img={shaxslararo}
              title={"Shaxslararo muloqot ko'nikmalari"}
              description={
                "Shaxslararo ko'nikmalar: Bu martaba odamlarni o'rganish va ularga yordam berish bilan bog'liq bo'lganligi sababli, siz kuchli shaxslararo ko'nikmalarga ega bo'lishingiz kerak, ya'ni siz odamlar bilan yaxshi munosabatda bo'lishingiz kerak bo'ladi."
              }
            />
            <JobsList
              check={check}
              img={empatiya}
              title={"Empatiya"}
              description={
                "Siz boshqa odamning his-tuyg'ularining sababini tushunishga yordam berish uchun uning tajribasini tushunish va tushunish qobiliyatiga ega bo'lishingiz kerak."
              }
            />
            <JobsList
              check={check}
              img={tanqidiy}
              title={"Tanqidiy fikrlash qobiliyatlari"}
              description={
                "Psixolog aniq tashxisni aniqlash va to'g'ri davolash rejasini ishlab chiqish uchun kuchli tanqidiy fikrlash qobiliyatiga ega bo'lishi kerak."
              }
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <JobLayer
          layer={psixologLayer}
          title={"Psixologiyani qayerdan o'rgansa bo'ladi?"}
        />
      </section>
      <section className="py-5">
        <Manbalar
          firstImg={tutorial}
          firstTitle={"Psychology tutorial"}
          firstDescription={
            "Psychologytutorial.com - bu psixologiya va ruhiy salomatlik bilan bog'liq ma'lumotlarga yechim tqadim etuvchi platforma. Platformadagi ma'lumotlar turli darsliklar, tadqiqot maqolalari va boshqa manbalardan foydalanib , foydalanuvchilarda taqdim etilgan"
          }
          secondImg={free}
          secondTitle={"Free video lectures"}
          secondDescription={
            "FreeVideoLectures barchaga bepul oʻquv videomaʼruzalarini yetkazish maqsadida tashkil etilagn platforma. Barcha videoma'ruzalar eng yaxshi universitetlardan olingan. Ushbu videoma'ruzalar MIT, Stenford, Yel va Hindistondan IITlarni o'z ichiga olgan dunyodagi eng yaxshi universitetlarning buyuk olimlari, professorlari, olimlari va tadqiqotchilari tomonidan yozib olingan va olib boriladi"
          }
          thirdImg={psychology}
          thirdTitle={"Psychology"}
          thirdDescription={
            "Psychology.org jamoasi sizga psixologiya sohasida harakat qilishda yordam berishga bag'ishlangan muharrirlar, yozuvchilar, noshirlar va strateglarni o'z ichiga oladi. Psychology.org tarkibi faktik, keng qamrovli va dolzarb ekanligini tekshirish uchun o‘z soha bilimlari va tajribasidan foydalanadigan psixologiya va tegishli sohalardagi mutaxassislar va mualliflar va kontent sharhlovchilari tomonidan qo‘llab-quvvatlanadi."
          }
        />
      </section>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="bigH1">Psixolog kasbining yaxshi tomonlari qanday?</h1>
          <div className="row">
            <AdvantagesCard
              img={timetable}
              title={"MOSLASHUVCHAN ISH JADVALI"}
              description={
                "Psixolog bo'lishning katta afzalligi shundaki, siz foydali martabaga ega bo'lishingiz va hali ham do'stlaringiz va oilangiz bilan o'tkazish uchun ko'p vaqtingiz bo'lishi mumkin."
              }
            />
            <AdvantagesCard
              img={tanishlar}
              title={"MOSLASHUVCHAN ISH JADVALI"}
              description={
                "Agar siz odamlar bilan ishlashni va ularning to'liq salohiyatini ro'yobga chiqarishga yordam berishni yoqtirsangiz, psixolog bo'lish juda foydali bo'lishi mumkin.Siz tez-tez qiyinchiliklarga duch kelsangiz ham, mijozlaringiz haqiqiy muvaffaqiyatga erishayotganini va o'z maqsadlari sari harakat qilayotganini ko'rish sizga muvaffaqiyat hissini berishi mumkin."
              }
            />
            <AdvantagesCard
              img={biznes}
              title={"SHAXSIY BIZNES IMKONIYATI"}
              description={
                "Agar siz o'zingiz uchun ishlashni yoqtirsangiz va tadbirkorlik ruhiga ega bo'lsangiz, psixolog bo'lish ajoyib martaba tanlovi bo'lishi mumkin. O'zingizning shaxsiy terapiya amaliyotingizni yaratish sizga martaba ustidan to'liq nazorat qilish imkoniyatini beradi. AQSh Mehnat Departamenti ma'lumotlariga ko'ra, barcha psixologlarning taxminan 29% o'z-o'zini ish bilan ta'minlaydi."
              }
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <ForYou
          title={"Psixologiya sohasi siz uchunmi?"}
          backgroundImage={layerPsixolog}
          subtitle={"Tanlagan kasbingiz siz uchun qanchalik to'g'ri keladi?"}
          description={
            "Kasbga layoqatlilik testi - 7 ta test savolidan iborat bo'lib, siz tanlagan kasb o'zingiz uchun ruhiy, jisomoniy taraflama to'g'ri yoki noto'g'ri ekanligini aniqlashda yordam beradi."
          }
        />
      </section>
    </>
  );
}
