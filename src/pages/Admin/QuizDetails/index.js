import React, {useState} from "react";
import {
    BlackOutlineBtn,
    DeleteButton,
    ImgEditor,
    ManbalarWrapper,
    ManbalarWrapperFirst,
    OutlineBtn
} from "../../../styles";
import arxitektor from "../../../assets/images/arxitektor/arxiektor.svg";
import CardMaker from "../../../components/CardMaker";
import bino from "../../../assets/images/arxitektor/bino.svg";
import chizmachilik from "../../../assets/images/arxitektor/chizmachilik.svg";
import detallar from "../../../assets/images/arxitektor/detallar.svg";
import discover from "../../../assets/images/arxitektor/discover.svg";
import edx from "../../../assets/images/arxitektor/edx.svg";
import innovatsiya from "../../../assets/images/arxitektor/innovatsiya.svg";
import layerVeterinar from "../../../assets/images/arxitektor/layerVeterinar.svg";
import muammolar from "../../../assets/images/arxitektor/muammolar.svg";
import qurilish from "../../../assets/images/arxitektor/qurilish.svg";
import rivojlanish from "../../../assets/images/arxitektor/rivojlanish.svg";
import sayohat from "../../../assets/images/arxitektor/sayohat.svg";
import skillshare from "../../../assets/images/arxitektor/skillshare.svg";
import veterinarLayer from "../../../assets/images/arxitektor/veterinarLayer.svg";
import xatolik from "../../../assets/images/arxitektor/xatolik.svg";
import xavfsizlik from "../../../assets/images/arxitektor/xavfsizlik.svg";
import JobsList from "../../../components/JobsList";
import check from "../../../assets/images/check.svg";
import JobLayer from "../../../components/JobLayer";
import Manbalar from "../../../components/Manbalar";
import AdvantagesCard from "../../../components/AdvantagesCard";
import ForYou from "../../../components/ForYou";
import JobsContact from "../../../components/JobsContact";
import dasturchi1 from "../../../assets/images/dasturchi1.svg";
import dasturchi2 from "../../../assets/images/dasturchi2.svg";
import dasturchi3 from "../../../assets/images/dasturchi3.svg";
import FrequentlyQuestions from "../../../components/FrequentlyQuestions";
import {EditText, EditTextarea} from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import Footer from "../../../components/Footer";
import {Button, Spin} from "antd";
import {instance} from "../../../redux/actions";
import {BASE_URL} from "../../../utils/constans";
import {DeleteOutlined, LoadingOutlined} from '@ant-design/icons';
import {v4 as uuid} from 'uuid';
import {Link} from "react-router-dom";

export default function QuizDetails() {

    const [state, setState] = useState({
        tasks: [],
        wantTobes: [],
        sourcesToLearn: []
    });
    const [job, setJob] = useState(false);
    const [attachments, setAttachments] = useState({});
    const [loadings, setLoadings] = useState({});


    //antd icons
    const antIcon = <LoadingOutlined style={{fontSize: 24, color: "yellowgreen"}} spin/>;
    //antd icons

    const collectJobData = (e) => {
        let a = {...state, [e.name]: e.value}
        setState(a)
    }

    const previewImage = (event, name) => {

        if (event.target.files && event.target.files[0]) {
            setAttachments({
                ...attachments,
                [name]: URL.createObjectURL(event.target.files[0]),
                [name + "File"]: event.target.files[0],
                [name + "FromServer"]: null
            })
        }
    }

    const saveAttachment = (file, name) => {
        setLoadings({...loadings, [name + "Loading"]: true})
        let formData = new FormData()
        formData.append("files", file)
        instance.post(
            "api/v1/file/saveAttachments",
            formData
        ).then(function (res) {
            setAttachments({
                ...attachments,
                [name + "FromServer"]: res?.data?.data[0]
            })
            setLoadings({...loadings, [name + "Loading"]: false})
            setState({...state, [name]: res?.data?.data[0]})
        })
    }

    const saveTasksAttachment = (file, name, id) => {
        setLoadings({...loadings, [name + "Loading"]: true})
        let formData = new FormData()
        formData.append("files", file)
        instance.post(
            "api/v1/file/saveAttachments",
            formData
        ).then(function (res) {
            setAttachments({
                ...attachments,
                [name + "FromServer"]: res?.data?.data[0]
            })
            setLoadings({...loadings, [name + "Loading"]: false})
            let tasks = state.tasks;


            for (let i in tasks) {
                if (tasks[i].id == id) {
                    tasks[i].attachment = res.data?.data[0];
                    break;
                }
                setState({...state, tasks})
            }


        })
    }

    const saveWantTobesAttachment = (file, name, id) => {
        setLoadings({...loadings, [name + "Loading"]: true})
        let formData = new FormData()
        formData.append("files", file)
        instance.post(
            "api/v1/file/saveAttachments",
            formData
        ).then(function (res) {
            setAttachments({
                ...attachments,
                [name + "FromServer"]: res?.data?.data[0]
            })
            setLoadings({...loadings, [name + "Loading"]: false})
            let wantTobes = state.wantTobes;


            for (let i in wantTobes) {
                if (wantTobes[i].id == id) {
                    wantTobes[i].attachment = res.data?.data[0];
                    break;
                }
                setState({...state, wantTobes})
            }


        })
    }


    const saveSourcesToLearnAttachment = (file, name, id) => {
        setLoadings({...loadings, [name + "Loading"]: true})
        let formData = new FormData()
        formData.append("files", file)
        instance.post(
            "api/v1/file/saveAttachments",
            formData
        ).then(function (res) {
            setAttachments({
                ...attachments,
                [name + "FromServer"]: res?.data?.data[0]
            })
            setLoadings({...loadings, [name + "Loading"]: false})
            let sourcesToLearn = state.sourcesToLearn;


            for (let i in sourcesToLearn) {
                if (sourcesToLearn[i].id == id) {
                    sourcesToLearn[i].attachment = res.data?.data[0];
                    break;
                }
                setState({...state, sourcesToLearn})
            }


        })
    }

    const addTasks = () => {
        let stateForUpdate = state
        let id = uuid();
        stateForUpdate.tasks.push({
            id,
            title: "Binolarni loyihalash",
            description: "Kompyuter dasturlari yordamida loyhaning dastlabki dizaynini va eskizini modellashtiradi"
        });
        setState(stateForUpdate)
        setJob(!job) //kerak emas, state ni refresh qilib olish uchun ishlatildi
    }

    const addWantTobes = () => {
        let stateForUpdate = state
        let id = uuid();
        stateForUpdate.wantTobes.push({
            id,
            title: "Chizmachilik Mahorati",
            description: "Dizayn va chizish arxitektor qiladigan ishning asosiy qismidir. Dizayn qobiliyatlaridan foydalangan holda, arxitektor o'z mijozlari uchun amaliy, hayotiy va vizual binolarning loyihasini ishlab chiqadi."
        });
        setState(stateForUpdate)
        setJob(!job) //kerak emas, state ni refresh qilib olish uchun ishlatildi
    }

    const addSourcesToLearn = () => {
        let stateForUpdate = state
        let id = uuid();
        stateForUpdate.sourcesToLearn.push({
            id,
            title: "edx",
            description: "Har bir inson o'z hayotida, jamiyatida yoki dunyosida o'zgarishlar yaratish imkoniyatiga ega. Ta'limning o'zgartiruvchi kuchi bu potentsialni ochadi. Shunga qaramay, yuqori sifatli ta'lim olish kam sonlilarning imtiyozi bo'lib kelgan. 2012 yilda biz o'rganishda seysmik siljish vaqti ekanligini angladik. Sinab ko'rilgan va to'g'ridan-to'g'ri etakchigacha. Ba'zilar uchun dan 'hamma uchun' ga."
        });
        setState(stateForUpdate)
        setJob(!job) //kerak emas, state ni refresh qilib olish uchun ishlatildi
    }

    console.log(state, "state")
    console.log(attachments, "attachments")

    function deleteTask(id) {
        let updatedSate = state
        let tasks = updatedSate.tasks;
        let index = tasks.map(x => {
            return x.id
        }).indexOf(id)

        tasks.splice(index, 1);
        setState(updatedSate)
        setJob(!job) //state ni refresh qilish uchun ishlatildi
    }

    function deleteWantTobe(id) {
        let updatedSate = state
        let tasks = updatedSate.wantTobes;
        let index = tasks.map(x => {
            return x.id
        }).indexOf(id)

        tasks.splice(index, 1);
        setState(updatedSate)
        setJob(!job) //state ni refresh qilish uchun ishlatildi
    }

    function editTask(e, item) {
        let updatedState = state;
        let tasks = updatedState.tasks
        for (let i in tasks) {
            if (tasks[i].id == item.id) {
                tasks[i][e.name] = e.value;
                break;
            }
        }
        setState(updatedState)
        setJob(!job)
    }

    function editWantTobe(e, item) {
        let updatedState = state;
        let tasks = updatedState.wantTobes
        for (let i in tasks) {
            if (tasks[i].id == item.id) {
                tasks[i][e.name] = e.value;
                break;
            }
        }
        setState(updatedState)
        setJob(!job)
    }

    function editSourcesToLearn(e, item) {
        let updatedState = state;
        let sourcesToLearn = updatedState.sourcesToLearn
        for (let i in sourcesToLearn) {
            if (sourcesToLearn[i].id == item.id) {
                sourcesToLearn[i][e.name] = e.value;
                break;
            }
        }
        setState(updatedState)
        setJob(!job)
    }

    return (
        <>
            <div className="DefaultBg minHeight">
                <div className="container py-5 px-5 text-white">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
                            <h1 className="title">
                                <EditText defaultValue={state.name ? state.name : "Enter job name"}
                                          onSave={(e) => collectJobData(e)} name={"name"}
                                          inputClassName={"text-dark"}/>
                            </h1>
                            <p className="subtitle">
                                <EditTextarea rows={5}
                                              defaultValue={state.description ? state.description : "Job description lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias"}
                                              onSave={(e) => collectJobData(e)}
                                              name={"description"}
                                              inputClassName={"text-dark"}/>
                            </p>
                            <OutlineBtn className="mt-4 outBtn">Batafsil</OutlineBtn>
                        </div>
                        <label htmlFor={"select_main_image"}
                               className={"col-lg-6 col-md-6 col-xl-g col-sm-12 ps-5 col-12"}>
                            <Spin
                                spinning={loadings.attachmentLoading ? loadings.attachmentLoading : false}
                                indicator={antIcon}
                            >
                                <ImgEditor>
                                    <img
                                        src={attachments.attachmentFromServer ? BASE_URL + "api/v1/file/get/" + state.attachment : attachments.attachment ? attachments.attachment : state.attachment ? state.attachment : arxitektor}
                                        className="img-fluid" alt=""/>
                                </ImgEditor>
                                {attachments.attachmentFromServer ? "" : attachments.attachment ?
                                    <Button
                                        onClick={() => saveAttachment(attachments.attachmentFile, "attachment", "state")}
                                        className={"ant-btn-block d-block"}>Upload</Button> : ""}
                            </Spin>


                        </label>
                        <input
                            onChange={(e) => previewImage(e, "attachment")}
                            type="file" id={"select_main_image"}
                            hidden
                            accept={"image/*"}
                        />

                    </div>
                </div>
            </div>
            <section>
                <div className="container px-5 py-5">
                    <h1 className="bigH1">
                        <EditText
                            defaultValue={state.taskTitle ? state.taskTitle : "Arxitektor nima vazifani bajaradi?"}
                            onSave={(e) => collectJobData(e)} name={"taskTitle"}
                            inputClassName={"text-dark"}/>
                    </h1>
                    <Button onClick={addTasks}>Vazifalar qo'shish</Button>
                </div>
            </section>
            <section>
                <div className="w-100">
                    <div className="row">
                        {state?.tasks?.map((item, index) => {
                            return (
                                <div
                                    key={item.id}
                                    className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 cardmaker pt-5 pe-5 pb-4 position-relative">
                                    <DeleteButton onClick={() => deleteTask(item.id)}
                                                  className={"deleteButton"}><DeleteOutlined/></DeleteButton>
                                    <label htmlFor={item.id}>
                                        <ImgEditor>
                                            {/*    antd design loading stylni buzib qo'yganligi uchun loading qo'lda yasaldi*/}
                                            <img
                                                style={{opacity: loadings[item.id + "AttachmentLoading"] ? '.2' : '1'}}
                                                className="mb-3 img-fluid minHeightImg"
                                                src={attachments[item.id + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments[item.id + "AttachmentFromServer"] : attachments[item.id + "Attachment"] ? attachments[item.id + "Attachment"] : item.attachment ? item.attachment : bino}
                                                alt=""/>
                                            {loadings[item.id + "AttachmentLoading"] ?
                                                <div className={"iconLoadingWrapper"}>
                                                    <div className={"icon_loading"}>
                                                        <Spin indicator={antIcon}/>
                                                    </div>
                                                </div> : ""}
                                            {attachments[item.id + "AttachmentFromServer"] ? "" : attachments[item.id + "Attachment"] ?
                                                <Button
                                                    onClick={() => saveTasksAttachment(attachments[item.id + "AttachmentFile"], item.id + "Attachment", item.id)}
                                                    className={"ant-btn-block d-block"}>Upload</Button> : ""}
                                            <input onChange={(e) => previewImage(e, item.id + "Attachment")} type="file"
                                                   id={item.id} hidden/>
                                        </ImgEditor></label>
                                    <h2><EditText onSave={(e) => editTask(e, item)} name={"title"}
                                                  defaultValue={item.title}/></h2>
                                    <p className="maxwidthP">
                                        <EditTextarea
                                            rows={4}
                                            defaultValue={item.description}
                                            onSave={(e) => editTask(e, item)}
                                            name={"description"}
                                        />
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-5 px-4">
                    <h1 className="bigH1 my-5">
                        <EditText onSave={(e) => collectJobData(e)} name={"wantTobeTitle"}
                                  defaultValue={state.wantTobeTitle ? state.wantTobeTitle : "Arxitektor bo'lish uchun nimalarga e'tibor qaratish kerak?"}/>
                    </h1>
                    <Button onClick={addWantTobes} className={"ant-btn-dark mb-3"}>Nimalarga e'tibor qaratamiz
                        🙂</Button>
                    {state.wantTobes?.map((item, index) => {
                        return (
                            <div className="row px-2">

                                <div className="col-12 jobsListCard  py-5 mb-4 position-relative">
                                    <DeleteButton onClick={() => deleteWantTobe(item.id)}
                                                  className={"deleteButton"}><DeleteOutlined/> </DeleteButton>
                                    <div className="d-flex jobsListWrap">
                                        <div className=" justify-content-center d-flex mx-5 w-25">

                                            <div className="position-relative">

                                                <label htmlFor={item.id}>

                                                    <ImgEditor>
                                                        <img
                                                            className="position-absolute positionImg"
                                                            src={check}
                                                            alt=""
                                                        />
                                                        <img
                                                            style={{opacity: loadings[item.id + "AttachmentLoading"] ? '.2' : '1'}}
                                                            className="jobsListImg"
                                                            src={attachments[item.id + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments[item.id + "AttachmentFromServer"] : attachments[item.id + "Attachment"] ? attachments[item.id + "Attachment"] : item.attachment ? item.attachment : chizmachilik}
                                                            alt=""/>
                                                        {loadings[item.id + "AttachmentLoading"] ?
                                                            <div className={"iconLoadingWrapper"}>
                                                                <div className={"icon_loading"}>
                                                                    <Spin indicator={antIcon}/>
                                                                </div>
                                                            </div> : ""}
                                                        {attachments[item.id + "AttachmentFromServer"] ? "" : attachments[item.id + "Attachment"] ?
                                                            <Button
                                                                onClick={() => saveWantTobesAttachment(attachments[item.id + "AttachmentFile"], item.id + "Attachment", item.id)}
                                                                className={"ant-btn-block d-block"}>Upload</Button> : ""}
                                                        <input onChange={(e) => previewImage(e, item.id + "Attachment")}
                                                               type="file"
                                                               id={item.id} hidden/>
                                                    </ImgEditor></label>
                                            </div>
                                        </div>
                                        <div className="w-75">
                                            <h3 className="JobsListTitle"><EditText
                                                defaultValue={item.title ? item.title : "Diqqat!"}
                                                onSave={(e) => editWantTobe(e, item)} name={"title"}/></h3>
                                            <p className="JobsListdescription"><EditTextarea
                                                defaultValue={item.description ? item.description : "E'tibor qaratishing kerak bo'lgan narsa ))"}
                                                onSave={(e) => editWantTobe(e, item)} name={"description"}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="py-5">
                <div className="row align-items-center  DefaultBg minHeightLayer ">
                    <div className="container px-5">
                        <div className="row p-5">
                            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 d-flex align-items-center">
                                <h1 className="title layerH1 px-4 text-white">
                                    <EditTextarea rows={7} inputClassName={"text-dark"} onSave={collectJobData}
                                                  defaultValue={state.whereCanStudyTitle ? state.whereCanStudyTitle : "Arxitektorlikni qayerdan o'rgansa bo'ladi"}
                                                  name={"whereCanStudyTitle"}/>
                                </h1>
                            </div>
                            <div
                                className="col-lg-6 col-md-6 col-xl-g col-sm-12 layerRelative col-12 position-relative">

                                <input hidden id={"whereCanStudyAttachment"} type="file"
                                       onChange={(e) => previewImage(e, "whereCanStudyAttachment")}/>

                                <ImgEditor style={{height:"100%"}} >
                                    <label htmlFor="whereCanStudyAttachment">
                                        <img
                                            style={{opacity: loadings["whereCanStudy" + "AttachmentLoading"] ? '.2' : '1'}}
                                            className="img-fluid layerAbsolute"
                                            src={attachments["whereCanStudy" + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments["whereCanStudy" + "AttachmentFromServer"] : attachments["whereCanStudy" + "Attachment"] ? attachments["whereCanStudy" + "Attachment"] : state.whereCanStudyAttachment ? state.whereCanStudyAttachment : veterinarLayer}
                                            alt=""/>
                                    </label>
                                    {loadings["whereCanStudy" + "AttachmentLoading"] ?
                                        <div className={"iconLoadingWrapper"}>
                                            <div className={"icon_loading"}>
                                                <Spin indicator={antIcon}/>
                                            </div>
                                        </div> : ""}
                                </ImgEditor>

                                {attachments["whereCanStudy" + "AttachmentFromServer"] ? "" : attachments["whereCanStudy" + "Attachment"] ?
                                    <Button
                                        onClick={() => saveAttachment(attachments["whereCanStudy" + "AttachmentFile"], "whereCanStudy" + "Attachment")}
                                        className={"ant-btn-block d-block mt-2"}>Upload</Button> : ""}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">

                <Button className={"mb-3"} onClick={addSourcesToLearn}>Mustaqil o'rganmiz, qaysi manba'lardan? 🤔</Button>


                <div className="container-fluid">
                    <div className="row">
                        <div className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya textCenter">
                            <ManbalarWrapperFirst>
                                <h1 className="defaultH1">Mustaqil o'rganish uchun manbalar</h1>
                            </ManbalarWrapperFirst>
                        </div>
                        {state.sourcesToLearn?.map((item) => {
                            return (
                                <div className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya textCenter" key={item.id}>
                                    <ManbalarWrapper>
                                        <input hidden id={item.id} type="file"
                                               onChange={(e) => previewImage(e, item.id + "Attachment")}/>
                                        <label htmlFor={item.id}>
                                        <ImgEditor>

                                                <img
                                                    style={{opacity: loadings[item.id + "AttachmentLoading"] ? '.2' : '1'}}
                                                    className=""
                                                    src={attachments[item.id + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments[item.id + "AttachmentFromServer"] : attachments[item.id + "Attachment"] ? attachments[item.id + "Attachment"] : item.attachment ? item.attachment : edx}
                                                    alt=""/>

                                            {loadings[item.id + "AttachmentLoading"] ?
                                                <div className={"iconLoadingWrapper"}>
                                                    <div className={"icon_loading"}>
                                                        <Spin indicator={antIcon}/>
                                                    </div>
                                                </div> : ""}
                                            {attachments[item.id + "AttachmentFromServer"] ? "" : attachments[item.id + "Attachment"] ?
                                                <Button
                                                    onClick={() => saveSourcesToLearnAttachment(attachments[item.id + "AttachmentFile"], item.id + "Attachment",item.id)}
                                                    className={"ant-btn-block d-block mt-2"}>Upload</Button> : ""}
                                        </ImgEditor>
                                        </label>

                                        <h1 className="defaultH1 my-4"><EditText name={"title"} onSave={(e)=>editSourcesToLearn(e,item)} defaultValue={item.title ? item.title : "edx"}/></h1>
                                        <p className="defaultP"><EditTextarea name={"description"} onSave={(e)=>editSourcesToLearn(e,item)} defaultValue={item.description ? item.description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dicta dolorem dolores eaque eius et, fugit ipsa iusto nulla perspiciatis porro quam quos, saepe veniam voluptas. Commodi expedita nobis odio!"}/></p>
                                        <EditText name={"link"} onSave={(e)=>editSourcesToLearn(e,item)} defaultValue={item.link ? item.link : "https://t.me/abduroshyd"}/>
                                        <BlackOutlineBtn href={item.link ? item.link : "https://t.me/abduroshyd"} className="blackBtnPosition mb-1">
                                            Platformaga o'tish
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
            <Footer/>

            <button type={"submit"}>saqlash</button>
        </>
    );
}
