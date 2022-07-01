import React, { useState } from "react";
import QuizForm from "../../components/QuizForm";
import SearchForm from "../../components/SearchForm";
import Psixolog from "../../assets/images/psixolog.svg";
import Veterinar from "../../assets/images/veterinar.svg";
import Arxitektor from "../../assets/images/arxitektor.svg";
import Muhandis from "../../assets/images/muhandis.svg";
import QuizJobCard from "../../components/QuizJobCard";
export default function Quiz() {
  const [jobs, setJobs] = useState([
    {
      image: Arxitektor,
      jobName: "Arxitektor",
      salary: "45,000$ - 131,00$",
      workFrom: "Masofadan ishlash",
      route: "arxitektor",
    },
    {
      image: Psixolog,
      jobName: "Psixolog",
      salary: "39,000$ - 270,00$",
      workFrom: "Masofadan ishlash",
      route: "psixolog",
    },
    {
      image: Veterinar,
      jobName: "Veterinar",
      salary: "29,000$ - 200,00$",
      workFrom: "Masofadan ishlash",
      route: "veterinar",
    },
    {
      image: Muhandis,
      jobName: "3D Muhandis",
      salary: "86,000$ - 135,00$",
      workFrom: "Masofadan ishlash",
      route: "muhandis",
    },
  ]);
  return (
    <>
      <div className="py-5 container px-5">
        <QuizForm />
      </div>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="colorH1">Kasbni tanlang</h1>
          <SearchForm />
          <div className="row">
            {jobs.map((item, i) => (
              <QuizJobCard
                key={item.id}
                id={i}
                img={item.image}
                jobName={item.jobName}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
