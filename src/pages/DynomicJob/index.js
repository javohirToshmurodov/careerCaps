import React, {useEffect, useState} from "react";
import {BlackOutlineBtn, ManbalarWrapper, ManbalarWrapperFirst, OutlineBtn} from "../../styles";
import Footer from "../../components/Footer";
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
import w3schools from "../../assets/images/w3schools.svg";
import academy from "../../assets/images/academy.svg";
import udemy from "../../assets/images/udemy.svg";
import AdvantagesCard from "../../components/AdvantagesCard";
import maydon from "../../assets/images/maydon.svg";
import rivojlanish from "../../assets/images/rivojlanish.svg";
import masofaviy from "../../assets/images/masofaviy.svg";
import ForYou from "../../components/ForYou";
import layerDasturchi from "../../assets/images/layerDasturchi.svg";
import JobsContact from "../../components/JobsContact";
import dasturchi1 from "../../assets/images/dasturchi1.svg";
import dasturchi2 from "../../assets/images/dasturchi2.svg";
import dasturchi3 from "../../assets/images/dasturchi3.svg";
import FrequentlyQuestions from "../../components/FrequentlyQuestions";
import {instance} from "../../redux/actions";
import {Link, useParams} from "react-router-dom";
import {BASE_URL} from "../../utils/constans";
import juggling from "../../assets/images/juggling.svg";

export default function Dasturchi() {

    const {job_id} = useParams();
    const [job, setJob] = useState({})

    useEffect(() => {
        instance.get("api/v1/quiz/" + job_id).then(function (res) {
            if (res.data.success) {
                setJob(res.data.data)
            }
        })
    }, [])

    return (
        <>
            <div className="DefaultBg minHeight">
                <div className="container py-5 px-5 text-white">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
                            <h1 className="title">{job.name}</h1>
                            <p className="subtitle">
                                {job.description}
                            </p>
                            <OutlineBtn className="mt-4 outBtn">Batafsil</OutlineBtn>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xl-g col-sm-12 d-flex ps-5 col-12">
                            <img src={BASE_URL + "api/v1/file/get/" + job.attachment} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container py-5 px-5">
                    <h1 className="bigH1">{job.taskTitle}</h1>
                </div>
            </section>
            <section>
                <div className="w-100">
                    <div className="row">
                        {job.tasks?.map(item => {
                            return (
                                <CardMaker
                                    key={item.id}
                                    img={BASE_URL + "api/v1/file/get/" + item.attachment}
                                    title={item.title}
                                    description={item.description}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-5 px-4">
                    <h1 className="bigH1 my-5">
                        {job.wantTobeTitle}
                    </h1>
                    <div className="row px-2">
                        {job.wantTobes?.map(item => {
                            return (
                                <JobsList
                                    key={item.id}
                                    check={check}
                                    img={BASE_URL + "api/v1/file/get/" + item.attachment}
                                    title={item.title}
                                    description={item.description}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="py-5">
                <JobLayer
                    layer={BASE_URL + "api/v1/file/get/" + job.whereCanStudyAttachment}
                    title={job.whereCanStudyTitle}
                />
            </section>
            <section className="py-5">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya textCenter">
                            <ManbalarWrapperFirst>
                                <h1 className="defaultH1">Mustaqil o'rganish uchun manbalar</h1>
                            </ManbalarWrapperFirst>
                        </div>
                        {job.sourcesToLearn?.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya textCenter">
                                    <ManbalarWrapper>
                                        <img src={BASE_URL + "api/v1/file/get/" + item.attachment} alt=""/>
                                        <h1 className="defaultH1 my-4">{item.title}</h1>
                                        <p className="defaultP">{item.description}</p>
                                        <BlackOutlineBtn className="blackBtnPosition">
                                            <a href={item.link}>
                                                Platformaga o'tish
                                            </a>
                                        </BlackOutlineBtn>
                                    </ManbalarWrapper>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container px-5">
                    <h1 className="bigH1">
                        {job.successSidesTitle}
                    </h1>
                    <div className="row ">
                        {job.successSides?.map(item => {
                            return (
                                <AdvantagesCard
                                    key={item.id}
                                    img={BASE_URL + "api/v1/file/get/" + item.attachment}
                                    title={item.title}
                                    description={item.description}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="py-5">
                <ForYou
                    title={"Tanlagan kasbingiz siz uchun qanchalik to'g'ri keladi?"}
                    backgroundImage={BASE_URL + "api/v1/file/get/" + job.jobMatchingAttachment}
                    subtitle={job.jobMatchingTitle}
                    description={
                        "Kasbga layoqatlilik testi - 7 ta test savolidan iborat bo'lib, siz tanlagan kasb o'zingiz uchun ruhiy, jisomoniy taraflama to'g'ri yoki noto'g'ri ekanligini aniqlashda yordam beradi."
                    }
                />
            </section>
            <section className="py-5">
                <div className="container px-5">
                    <h1 className="bigH1">{job.successPersonsTitle}</h1>
                    <div className="row mt-4 justify-content-center">
                        {job.successPeople?.map(item => {
                            return (
                                <JobsContact
                                    img={BASE_URL + "api/v1/file/get/" + item.attachment}
                                    name={item.name}
                                    title={item.description}
                                    telegram={item.telegram}
                                    linkedIn={item.linkedIn}
                                    instagram={item.instagram}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container px-5">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                            <h1 className="mb-4 bigH1">Tez-tez so'raladigan savollarga javoblar</h1>
                            <div className="accordion" id="accordionExample">
                                {job.faqs?.map(item => {
                                    return (
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id={"heading" + item.id}>
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={"#collapse"+item.id}
                                                    aria-expanded="true"
                                                    aria-controls={"collapse"+item.id}
                                                >
                                                    {item.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={"collapse"+item.id}
                                                className="accordion-collapse collapse"
                                                aria-labelledby={"heading" + item.id}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">{item.answer}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12"
                            style={{
                                background: `url(${juggling})`,
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}
