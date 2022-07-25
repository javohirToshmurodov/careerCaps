import {
    faAlignRight,
    faCheckCircle,
    faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import mainPic from "../../assets/images/jobsCatalog.png";
import SearchForm from "../../components/SearchForm";
import jobs from "../../data/jobs";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { instance } from "../../redux/actions";
import { BASE_URL } from "../../utils/constans";
import {useSelector} from "react-redux";

export default function JobsCatalog() {
    const navigate = useNavigate();
    const [kasblar, setKasblar] = useState([])
    const kasb = useSelector((state) => state.jobsData.quizzes)

    useEffect(() => {
        getJobs()
    }, [])


    function getJobs() {
        instance.get("api/v1/quiz").then(function (res) {
            if (res.data.success) {
                setKasblar(res.data.data)
            } else {
                setKasblar(jobs)
            }
        })
    }

    const searchJob = (e = '') => {
        if (e.trim().length === 0) {
            setKasblar([...kasb])
            return
        }
        const arr = kasblar.filter((item) =>
            item.name.toLowerCase().includes(e.toLowerCase())
        )
        setKasblar([...arr])
    }

    return (
        <>
            <div className="DefaultBg minHeight">
                <div className="container py-5 px-5 text-white">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
                            <h1 className="title">Kasblar ro'yxati</h1>
                            <p className="subtitle">Kelajak kasbingizni biz bilan tanlang</p>
                        </div>
                        <div
                            className="col-lg-6 d-flex justify-content-center align-items-center flex-column col-md-6 col-xl-g col-sm-12   col-12">
                            <img className="img-fluid mt-4" src={mainPic} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container px-5 py-5">
                    <SearchForm searchJob={searchJob} />
                    <div className="row px-3">
                        <div className="col-12 ">
                            {kasblar.map((e) => (
                                <div
                                    className="row pt-3 pb-3 align-items-center jobsCard ps-4 pe-0 mt-4  position-relative"
                                    key={e.id}
                                >
                                    <Link to={"/job/" + e.id}
                                        className="goJob"
                                    >
                                        <FontAwesomeIcon icon={faRightLong} />
                                    </Link>
                                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
                                        <img className={"img-fluid"} src={BASE_URL + "api/v1/file/get/" + e.attachment}
                                            alt="" />
                                    </div>
                                    <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                                        <h1 className="defaultH1">{e.name}</h1>
                                        <p className="mt-4 defaultP">Masofadan ishlash</p>
                                        <div className="d-flex gap-5  jobsButton">
                                            <button className="onlineButton">
                                                Online <FontAwesomeIcon icon={faCheckCircle} />{" "}
                                            </button>
                                            <button className="offlineButton">Offline</button>
                                        </div>
                                    </div>
                                    <div
                                        className="col-12  pb-2 col-xl-5 col-lg-5 col-md-12 jobsSalary col-sm-12 align-self">
                                        <p className="defaultP ">Yillik maosh</p>
                                        <h1 className="salaryH1">{e.yearlySalary}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
