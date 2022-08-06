import React, {useEffect, useState} from "react";
import {
    AdvantagesCardWrapper,
    BlackOutlineBtn,
    DeleteButton,
    ForYouWrapper,
    ImgEditor,
    JobsContactWrapper,
    ManbalarWrapper,
    ManbalarWrapperFirst,
    OutlineBtn
} from "../../../styles";
import arxitektor from "../../../assets/images/arxitektor/arxiektor.svg";
import bino from "../../../assets/images/arxitektor/bino.svg";
import chizmachilik from "../../../assets/images/arxitektor/chizmachilik.svg";
import edx from "../../../assets/images/arxitektor/edx.svg";
import innovatsiya from "../../../assets/images/arxitektor/innovatsiya.svg";
import layerVeterinar from "../../../assets/images/arxitektor/layerVeterinar.svg";
import veterinarLayer from "../../../assets/images/arxitektor/veterinarLayer.svg";
import check from "../../../assets/images/check.svg";
import dasturchi1 from "../../../assets/images/dasturchi1.svg";
import {EditText, EditTextarea} from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import './main.css';
import Footer from "../../../components/Footer";
import {Button, Input, Modal, Spin} from "antd";
import {instance} from "../../../redux/actions";
import {BASE_URL} from "../../../utils/constans";
import {DeleteOutlined, LoadingOutlined} from '@ant-design/icons';
import {v4 as uuid} from 'uuid';
import {TestOutlineBtn} from "../../../components/TestOutlineBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import juggling from "../../../assets/images/juggling.svg";
import {useParams} from "react-router-dom";
import {useAlert} from "react-alert";

export default function QuizDetails() {


    const {quiz_id} = useParams();

    const [state, setState] = useState({
        name: "Enter a job name",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti facere facilis aaaa",
        attachment: "1659478f-496e-45e7-962e-ca7a5c2592a9",
        yearlySalary: "",
        taskTitle: "Arxitektor nima vazifani bajaradi?",
        tasks: [{
            id: uuid(),
            attachment: "bb2af52d-6bbb-442a-bb4c-a29eab54773e",
            title: "Bino qurilishini nazorati",
            description: "Binoni loihaga binoan qurilayotganini nazorat ostiga oladi"
        }],
        wantTobeTitle: "Arxitektor bo'lish uchun nimalarga e'tibor qaratish kerak?",
        wantTobes: [{
            id: uuid(),
            attachment: "bb2af52d-6bbb-442a-bb4c-a29eab54773e",
            title: "Chizmachilik Mahorati",
            description: "Dizayn va chizish arxitektor qiladigan ishning asosiy qismidir. Dizayn qobiliyatlaridan foydalangan holda, arxitektor o'z mijozlari uchun amaliy, hayotiy va vizual binolarning loyihasini ishlab chiqadi."
        }],
        whereCanStudyTitle: "Arxitektorlikni qayerdan o'rgansa bo'ladi aaaa",
        whereCanStudyAttachment: "2e98a27f-875d-474a-94d2-56ddc124b9bc",
        sourcesToLearn: [{
            id: uuid(),
            attachment: "fe250b58-c79a-4546-80b4-c7611b82ccd5",
            title: "edx",
            description: "Dizayn va chizish arxitektor qiladigan ishning asosiy qismidir. Dizayn qobiliyatlaridan foydalangan holda, arxitektor o'z mijozlari uchun amaliy, hayotiy va vizual binolarning loyihasini ishlab chiqadi.",
            link: ""
        }],
        successSidesTitle: "Arxitektor kasbining yaxshi tomonlari qanday?",
        successSides: [{
            id: uuid(),
            attachment: "27c241b5-9df5-4f69-a3a6-1c972ca1d22e",
            title: "INNOVATSIYA VA IJOD",
            description: "Arxitektor turar-joyning uyini, ofis minorasi yoki jamoat kutubxonasini yaratadimi, u yangiliklarga sabab bo'ladi. Ushbu soha o'z-o'zini innovatsiyalarga yo'naltiradi, chunki hech bir loyiha bir xil emas."
        }],
        successPersonsTitle: "Top arxitektorlar",
        jobMatchingAttachment: "09ac8594-e80f-4389-b18b-723f226671b9",
        jobMatchingTitle: "Arxitektor sohasi siz uchunmi?",
        successPeople: [{
            id: uuid(),
            attachment: "e071466a-a2dd-4b34-b647-ed704fb1c7a6",
            name: "Axrorxo'ja Yodgorov",
            description: "EPAM Systems kompaniyasi, Senior Software Engineer",
            telegram: "",
            linkedIn: "",
            instagram: ""
        }],
        faqs: [{
            id: uuid(),
            question: "5*5 ==?",
            answer: "67"
        }],
        faqAttachment: "04d58435-8913-4b4d-ba0b-8113376ad6ba"
    });
    const [job, setJob] = useState(false);
    const [attachments, setAttachments] = useState({});
    const [loadings, setLoadings] = useState({});
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const alert = useAlert()


    useEffect((callbackfn, thisArg) => {
        setLoading(true)
        instance.get("api/v1/quiz/" + quiz_id).then(function (res) {
            if (res.data.success) {
                Object.keys(res.data.data).map((fieldName) => {
                    if (res.data.data[fieldName] != null) {
                        if (typeof res.data.data[fieldName] == "string") {
                            if (res.data.data[fieldName]) {
                                let updatedState = state;
                                state[fieldName] = res.data.data[fieldName]
                                setState(updatedState)
                                setJob(!job)
                            }
                        } else if (typeof res.data.data[fieldName] == "object") {
                            if (res.data.data[fieldName].length != 0) {
                                console.log(fieldName, res.data.data[fieldName], typeof res.data.data[fieldName])
                                let updatedState = state;
                                state[fieldName] = res.data.data[fieldName]
                                setState(updatedState)
                                setJob(!job)
                            }
                        }
                    }
                })
                alert.info("Quiz data received")
                setLoading(false)
            }
        })
    }, [quiz_id])


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
        console.log(file)
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


    const saveSuccessPersonAttachment = (file, name, id) => {
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
            let successPeople = state.successPeople;


            for (let i in successPeople) {
                if (successPeople[i].id == id) {
                    successPeople[i].attachment = res.data?.data[0];
                    break;
                }
                setState({...state, successPeople})
            }


        })
    }



    const saveSuccessSidesAttachment = (file, name, id) => {
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
            let successSides = state.successSides;


            for (let i in successSides) {
                if (successSides[i].id == id) {
                    successSides[i].attachment = res.data?.data[0];
                    break;
                }
                setState({...state, successSides})
            }


        })
    }

    const addTasks = () => {
        let stateForUpdate = state
        let id = uuid();
        stateForUpdate.tasks.push({
            id,
            attachment: "bb2af52d-6bbb-442a-bb4c-a29eab54773e",
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
            attachment: "bb2af52d-6bbb-442a-bb4c-a29eab54773e",
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
            attachment: "fe250b58-c79a-4546-80b4-c7611b82ccd5",
            title: "edx",
            description: "Har bir inson o'z hayotida, jamiyatida yoki dunyosida o'zgarishlar yaratish imkoniyatiga ega. Ta'limning o'zgartiruvchi kuchi bu potentsialni ochadi. Shunga qaramay, yuqori sifatli ta'lim olish kam sonlilarning imtiyozi bo'lib kelgan. 2012 yilda biz o'rganishda seysmik siljish vaqti ekanligini angladik. Sinab ko'rilgan va to'g'ridan-to'g'ri etakchigacha. Ba'zilar uchun dan 'hamma uchun' ga.",
            link: ""
        });
        setState(stateForUpdate)
        setJob(!job) //kerak emas, state ni refresh qilib olish uchun ishlatildi
    }

    const addSuccessPerson = () => {
        let stateForUpdate = state
        let id = uuid();
        stateForUpdate.successPeople.push({
            id,
            name: "Axrorxo'ja Yodgorov",
            attachment: "e071466a-a2dd-4b34-b647-ed704fb1c7a6",
            description: "EPAM Systems kompaniyasi, Senior Software Engineer",
            telegram: "",
            linkedIn: "",
            instagram: ""

        });
        setState(stateForUpdate)
        setJob(!job) //kerak emas, state ni refresh qilib olish uchun ishlatildi
    }

    const addFaqs = () => {
        let stateForUpdate = state
        let id = uuid();
        stateForUpdate.faqs.push({
            id,
            question: "Axrorxo'ja Yodgorov kim?",
            answer: "EPAM Systems kompaniyasi, Senior Software Engineer",

        });
        setState(stateForUpdate)
        setJob(!job) //kerak emas, state ni refresh qilib olish uchun ishlatildi
    }

    const addSuccessSide = () => {
        let stateForUpdate = state
        let id = uuid();
        stateForUpdate.successSides.push({
            id,
            attachment: "27c241b5-9df5-4f69-a3a6-1c972ca1d22e",
            title: "INNOVATSIYA VA IJOD",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dicta dolorem dolores eaque eius et, fugit ipsa iusto nulla perspiciatis porro quam quos, saepe veniam voluptas. Commodi expedita nobis odio!"
        });
        setState(stateForUpdate)
        setJob(!job) //kerak emas, state ni refresh qilib olish uchun ishlatildi
    }

    console.log(state, "state")
    console.log(attachments, "attachments")


    function deleteElementFromList(id, fromWhere) {
        let updatedSate = state
        let listOfState = updatedSate[fromWhere];
        let index = listOfState.map(x => {
            return x.id
        }).indexOf(id)

        listOfState.splice(index, 1);
        setState(updatedSate)
        setJob(!job) //state ni refresh qilish uchun ishlatildi
    }

    function editListItem(e, item, fromWhere) {
        let updatedState = state;
        let listOfState = updatedState[fromWhere]
        for (let i in listOfState) {
            if (listOfState[i].id == item.id) {
                listOfState[i][e.name] = e.value;
                break;
            }
        }
        setState(updatedState)
        setJob(!job)
    }


    const openModal = () => {
        setShowModal(!showModal);
    };

    const saveQuiz = () => {
        console.log(state)
        setLoading(true)
        instance.put(
            "api/v1/quiz", {...state, quizId: quiz_id})
            .then(function (res) {
                if (res.data.success) {
                    alert.success("Congrats.")
                    setShowModal(false)
                    setLoading(false)
                }
            })
    };


    document.onkeypress = function (e) {
        e = e || window.event;
        if (e.shiftKey && e.keyCode === 81) {
            setShowModal(true)
        }
    };

    window.onbeforeunload = function (e) {
        e = e || window.event;

        // For IE and Firefox prior to version 4
        if (e) {
            e.returnValue = 'Any string';
        }

        // For Safari
        return 'Any string';
    };

    return (
        <Spin indicator={antIcon} spinning={loading}>
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
                                        src={attachments.attachmentFromServer ? BASE_URL + "api/v1/file/get/" + state.attachment : attachments.attachment ? attachments.attachment : state.attachment ? BASE_URL + "api/v1/file/get/" + state.attachment : arxitektor}
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
                                    <DeleteButton onClick={() => deleteElementFromList(item.id, "tasks")}
                                                  className={"deleteButton"}><DeleteOutlined/></DeleteButton>
                                    <label htmlFor={item.id}>
                                        <ImgEditor>
                                            {/*    antd design loading stylni buzib qo'yganligi uchun loading qo'lda yasaldi*/}
                                            <img
                                                style={{
                                                    opacity: loadings[item.id + "AttachmentLoading"] ? '.2' : '1',
                                                    height: "90px",
                                                    width: "108px",
                                                    objectFit: "contain"
                                                }}
                                                className="mb-3 img-fluid minHeightImg"
                                                src={attachments[item.id + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments[item.id + "AttachmentFromServer"] : attachments[item.id + "Attachment"] ? attachments[item.id + "Attachment"] : item.attachment ? BASE_URL + "api/v1/file/get/" + item.attachment : bino}
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
                                    <h2><EditText onSave={(e) => editListItem(e, item, "tasks")} name={"title"}
                                                  defaultValue={item.title}/></h2>
                                    <p className="maxwidthP">
                                        <EditTextarea
                                            rows={4}
                                            defaultValue={item.description}
                                            onSave={(e) => editListItem(e, item, "tasks")}
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
                                    <DeleteButton onClick={() => deleteElementFromList(item.id, "wantTobes")}
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
                                                            src={attachments[item.id + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments[item.id + "AttachmentFromServer"] : attachments[item.id + "Attachment"] ? attachments[item.id + "Attachment"] : item.attachment ? BASE_URL + "api/v1/file/get/" + item.attachment : chizmachilik}
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
                                                onSave={(e) => editListItem(e, item, "wantTobes")} name={"title"}/></h3>
                                            <p className="JobsListdescription"><EditTextarea
                                                defaultValue={item.description ? item.description : "E'tibor qaratishing kerak bo'lgan narsa ))"}
                                                onSave={(e) => editListItem(e, item, "wantTobes")}
                                                name={"description"}/></p>
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

                                <ImgEditor style={{height: "100%"}}>
                                    <label htmlFor="whereCanStudyAttachment">
                                        <img
                                            style={{opacity: loadings["whereCanStudy" + "AttachmentLoading"] ? '.2' : '1'}}
                                            className="img-fluid layerAbsolute"
                                            src={attachments["whereCanStudy" + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments["whereCanStudy" + "AttachmentFromServer"] : attachments["whereCanStudy" + "Attachment"] ? attachments["whereCanStudy" + "Attachment"] : state.whereCanStudyAttachment ? BASE_URL + "api/v1/file/get/" + state.whereCanStudyAttachment : veterinarLayer}
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

                <Button className={"mb-3"} onClick={addSourcesToLearn}>Mustaqil o'rganmiz, qaysi manba'lardan?
                    🤔</Button>


                <div className="container-fluid">
                    <div className="row">
                        <div className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya textCenter">
                            <ManbalarWrapperFirst>
                                <h1 className="defaultH1">Mustaqil o'rganish uchun manbalar</h1>
                            </ManbalarWrapperFirst>
                        </div>
                        {state.sourcesToLearn?.map((item) => {
                            return (
                                <div
                                    className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya textCenter position-relative"
                                    key={item.id}>
                                    <DeleteButton onClick={() => deleteElementFromList(item.id, "sourcesToLearn")}
                                                  style={{
                                                      border: "none",
                                                      zIndex: 6
                                                  }}>
                                        <DeleteOutlined/>
                                    </DeleteButton>
                                    <ManbalarWrapper>
                                        <input hidden id={item.id} type="file"
                                               onChange={(e) => previewImage(e, item.id + "Attachment")}/>
                                        <label htmlFor={item.id}>
                                            <ImgEditor>

                                                <img
                                                    style={{opacity: loadings[item.id + "AttachmentLoading"] ? '.2' : '1'}}
                                                    className="img-fluid"
                                                    src={attachments[item.id + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments[item.id + "AttachmentFromServer"] : attachments[item.id + "Attachment"] ? attachments[item.id + "Attachment"] : item.attachment ? BASE_URL + "api/v1/file/get/" + item.attachment : edx}
                                                    alt=""/>

                                                {loadings[item.id + "AttachmentLoading"] ?
                                                    <div className={"iconLoadingWrapper"}>
                                                        <div className={"icon_loading"}>
                                                            <Spin indicator={antIcon}/>
                                                        </div>
                                                    </div> : ""}
                                                {attachments[item.id + "AttachmentFromServer"] ? "" : attachments[item.id + "Attachment"] ?
                                                    <Button
                                                        onClick={() => saveSourcesToLearnAttachment(attachments[item.id + "AttachmentFile"], item.id + "Attachment", item.id)}
                                                        className={"ant-btn-block d-block mt-2"}>Upload</Button> : ""}
                                            </ImgEditor>
                                        </label>

                                        <h1 className="defaultH1 my-4"><EditText inline name={"title"}
                                                                                 onSave={(e) => editListItem(e, item, "sourcesToLearn")}
                                                                                 defaultValue={item.title ? item.title : "edx"}/>
                                        </h1>
                                        <p className="defaultP"><EditTextarea name={"description"}
                                                                              onSave={(e) => editListItem(e, item, "sourcesToLearn")}
                                                                              defaultValue={item.description ? item.description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dicta dolorem dolores eaque eius et, fugit ipsa iusto nulla perspiciatis porro quam quos, saepe veniam voluptas. Commodi expedita nobis odio!"}/>
                                        </p>
                                        <EditText inline
                                                  name={"link"}
                                                  onSave={(e) => editListItem(e, item, "sourcesToLearn")}
                                                  defaultValue={item.link ? item.link : ""}
                                                  placeholder={"Platformaga o'tish uchun link"}
                                        />
                                        <BlackOutlineBtn href={item.link ? item.link : "https://t.me/abduroshyd"}
                                                         className="blackBtnPosition mb-1">
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
                        <EditText name={"successSidesTitle"} onSave={collectJobData}
                                  defaultValue={state.successSidesTitle ? state.successSidesTitle : "Arxitektor kasbining yaxshi tomonlari qanday?"}/>
                    </h1>


                    <Button onClick={addSuccessSide}> Bu kasbning qanday yaxshi taraflari bor ekana? </Button>

                    <div className="row">
                        {state.successSides?.map(item => {
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-3 position-relative"
                                     key={item.id}>
                                    <AdvantagesCardWrapper>

                                        <DeleteButton onClick={() => deleteElementFromList(item.id, "successSides")}
                                                      style={{
                                                          border: "none",
                                                          right: "-6px",
                                                          top: 0,
                                                      }}>
                                            <DeleteOutlined/>
                                        </DeleteButton>

                                        <div className="pt-5 px-4">
                                            <h2><EditText
                                                onSave={(e) => editListItem(e, item, "successSides")}
                                                defaultValue={item.title ? item.title : "INNOVATSIYA VA IJOD"}/></h2>

                                            <input hidden id={item.id} type="file"
                                                   onChange={(e) => previewImage(e, item.id + "Attachment")}/>
                                            <label htmlFor={item.id}>
                                                <ImgEditor>

                                                    <img
                                                        style={{opacity: loadings[item.id + "AttachmentLoading"] ? '.2' : '1'}}
                                                        className="my-2 img-fluid"
                                                        src={attachments[item.id + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments[item.id + "AttachmentFromServer"] : attachments[item.id + "Attachment"] ? attachments[item.id + "Attachment"] : item.attachment ? BASE_URL + "api/v1/file/get/" + item.attachment : innovatsiya}
                                                        alt=""/>

                                                    {loadings[item.id + "AttachmentLoading"] ?
                                                        <div className={"iconLoadingWrapper"}>
                                                            <div className={"icon_loading"}>
                                                                <Spin indicator={antIcon}/>
                                                            </div>
                                                        </div> : ""}
                                                    {attachments[item.id + "AttachmentFromServer"] ? "" : attachments[item.id + "Attachment"] ?
                                                        <Button
                                                            onClick={() => saveSuccessSidesAttachment(attachments[item.id + "AttachmentFile"], item.id + "Attachment", item.id)}
                                                            className={"ant-btn-block d-block mt-2"}>Upload</Button> : ""}
                                                </ImgEditor>
                                            </label>

                                            <p className="defaultP mt-3">
                                                <EditTextarea inline
                                                              rows={8}
                                                              onSave={(e) => editListItem(e, item, "successSides")}
                                                              defaultValue={item.description ? item.description : "Arxitektor turar-joyning uyini, ofis minorasi yoki jamoat kutubxonasini yaratadimi, u yangiliklarga sabab bo'ladi. Ushbu soha o'z-o'zini innovatsiyalarga yo'naltiradi, chunki hech bir loyiha bir xil emas."}/>
                                            </p>
                                        </div>
                                    </AdvantagesCardWrapper>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="py-5">

                <div className="row bg-white ">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 minHeightLayerForYou">
                        <ImgEditor
                            style={{height: "100%"}}
                        >
                            <label
                                style={{height: "100%"}}
                                htmlFor="jobMatchingAttachment"
                            >

                                <div
                                    className="w-100 h-100 d-flex justify-content-center align-items-center imgLayerBackground text-center img-fluid position-relative img_size_match"
                                    style={{
                                        background: `url(${attachments["jobMatching" + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments["jobMatching" + "AttachmentFromServer"] : attachments["jobMatching" + "Attachment"] ? attachments["jobMatching" + "Attachment"] : state.jobMatchingAttachment ? BASE_URL + "api/v1/file/get/" + state.jobMatchingAttachment : layerVeterinar
                                        })`,
                                        opacity: loadings["jobMatching" + "AttachmentLoading"] ? '.2' : '1'
                                    }}
                                >
                                    <div className="imgLayerForYou">
                                        <h1 className="defaultH1 mx-4  text-white">{"Tanlagan kasbingiz siz uchun qanchalik to'g'ri keladi?"}</h1>
                                    </div>
                                </div>
                            </label>

                            {loadings["jobMatching" + "AttachmentLoading"] ?
                                <div className={"iconLoadingWrapper"}>
                                    <div className={"icon_loading"}>
                                        <Spin indicator={antIcon}/>
                                    </div>
                                </div> : ""}


                            {attachments["jobMatching" + "AttachmentFromServer"] ? "" : attachments["jobMatching" + "Attachment"] ?
                                <Button
                                    onClick={() => saveAttachment(attachments["jobMatching" + "AttachmentFile"], "jobMatching" + "Attachment")}
                                    className={"ant-btn-block d-block mt-2"}>Upload</Button> : ""}


                            <input hidden id={"jobMatchingAttachment"} type="file"
                                   onChange={(e) => previewImage(e, "jobMatching" + "Attachment")}/>
                        </ImgEditor>


                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 bg-white col-12 minHeightLayerForYou">
                        <ForYouWrapper>
                            <h1 className="defaultH1 mt-4 "><EditText name={"jobMatchingTitle"} onSave={collectJobData}
                                                                      defaultValue={state.jobMatchingTitle}/></h1>
                            <div className="d-flex justify-content-between flex-column align-items-start heightAuto">
                                <p className="defaultP mt-5">{"Kasbga layoqatlilik testi - 7 ta test savolidan iborat bo'lib, siz tanlagan kasb o'zingiz uchun ruhiy, jisomoniy taraflama to'g'ri yoki noto'g'ri ekanligini aniqlashda yordam beradi."}</p>
                                <TestOutlineBtn className="outBtn"/>
                            </div>
                        </ForYouWrapper>
                    </div>
                </div>


            </section>
            <section className="py-5">
                <div className="container px-5">

                    <h1 className="bigH1">
                        <EditText
                            onSave={collectJobData}
                            name={"successPersonsTitle"}
                            defaultValue={state.successPersonsTitle ? state.successPersonsTitle : "Top Arxitektorlar"}/>
                        <Button onClick={addSuccessPerson}>Shu sohada muvoffaqqiyatga erishgan qanday insonlarni
                            bilasiz?</Button></h1>
                    <div className="row mt-4 justify-content-center">

                        {state.successPeople?.map(item => {
                            return (
                                <div key={item.id}
                                     className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 soya py-5 mb-3 position-relative">
                                    <DeleteButton onClick={() => deleteElementFromList(item.id, "successPeople")}
                                                  className={"deleteButton"}
                                                  style={{
                                                      zIndex: "5"
                                                  }}
                                    ><DeleteOutlined/></DeleteButton>
                                    <JobsContactWrapper>
                                        <div className="circleImage">
                                            <input hidden id={item.id} type="file"
                                                   onChange={(e) => previewImage(e, item.id + "Attachment")}/>
                                            <label htmlFor={item.id}>
                                                <ImgEditor className={"p-0"}>

                                                    <img
                                                        style={{opacity: loadings[item.id + "AttachmentLoading"] ? '.2' : '1'}}
                                                        className={"img-fluid"}
                                                        src={attachments[item.id + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments[item.id + "AttachmentFromServer"] : attachments[item.id + "Attachment"] ? attachments[item.id + "Attachment"] : item.attachment ? BASE_URL + "api/v1/file/get/" + item.attachment : dasturchi1}
                                                        alt=""/>

                                                    {loadings[item.id + "AttachmentLoading"] ?
                                                        <div className={"iconLoadingWrapper"}>
                                                            <div className={"icon_loading"}>
                                                                <Spin indicator={antIcon}/>
                                                            </div>
                                                        </div> : ""}
                                                    {attachments[item.id + "AttachmentFromServer"] ? "" : attachments[item.id + "Attachment"] ?
                                                        <Button
                                                            onClick={() => saveSuccessPersonAttachment(attachments[item.id + "AttachmentFile"], item.id + "Attachment", item.id)}
                                                            className={"ant-btn-block d-block mt-2"}>Upload</Button> : ""}
                                                </ImgEditor>
                                            </label>
                                        </div>
                                        <h4 className="mt-3 mx-3 nameH3"><EditText name={"name"}
                                                                                   defaultValue={item.name ? item.name : "Abdurashid Jumanov"}
                                                                                   onSave={(e) => editListItem(e, item, "successPeople")}/>
                                        </h4>
                                        <div className="px-4">
                                            <p className="titleH3"><EditTextarea name={"description"}
                                                                                 onSave={(e) => editListItem(e, item, "successPeople")}
                                                                                 defaultValue={item.description ? item.description : "EPAM Systems kompaniyasi, Senior Software Engineer"}/>
                                            </p>
                                            <EditText name={"telegram"} defaultValue={item.telegram}
                                                      onSave={(e) => editListItem(e, item, "successPeople")}
                                                      placeholder={"telegram"}/>
                                            <EditText name={"linkedIn"} defaultValue={item.linkedIn}
                                                      onSave={(e) => editListItem(e, item, "successPeople")}
                                                      placeholder={"linkedIn"}/>
                                            <EditText name={"instagram"} defaultValue={item.instagram}
                                                      onSave={(e) => editListItem(e, item, "successPeople")}
                                                      placeholder={"instagram"}/>
                                            <div className="d-flex justify-content-center gap-3">
                                                <div className="circleIcon">
                                                    <FontAwesomeIcon icon={faTelegram}/>
                                                </div>
                                                <div className="circleIcon">
                                                    <FontAwesomeIcon icon={faLinkedin}/>
                                                </div>
                                                <div className="circleIcon">
                                                    <FontAwesomeIcon icon={faInstagram}/>
                                                </div>
                                            </div>
                                        </div>
                                    </JobsContactWrapper>
                                </div>
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
                            <Button onClick={addFaqs} className={"mb-3"}>Tez-tez so'raladigan savollar qo'shishingiz
                                mumkin</Button>
                            <div className="accordion" id="accordionExample">
                                {state.faqs?.map(item => {
                                    return (
                                        <div className="accordion-item position-relative" key={item.id}>
                                            <DeleteButton onClick={() => deleteElementFromList(item.id, "faqs")}
                                                          className={"deleteButton"}
                                                          style={{
                                                              zIndex: 5,
                                                              top: "26px",
                                                              width: "35px",
                                                              height: "35px"
                                                          }}
                                            ><DeleteOutlined/></DeleteButton>
                                            <h2 className="accordion-header" id={"acc" + item.id}>
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={"#collapse" + item.id}
                                                    aria-expanded="true"
                                                    aria-controls={"collapse" + item.id}
                                                >
                                                    <EditText name={"question"}
                                                              defaultValue={item.question ? item.question : "Arxitektor bo'lish uchun qaysi fanlarni bilish kerak?"}
                                                              onSave={(e) => editListItem(e, item, "faqs")}
                                                    />
                                                </button>
                                            </h2>
                                            <div
                                                id={"collapse" + item.id}
                                                className="accordion-collapse collapse show"
                                                aria-labelledby={"acc" + item.id}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <EditTextarea name={"answer"}
                                                                  onSave={(e) => editListItem(e, item, "faqs")}
                                                                  defaultValue={item.answer ? item.answer : "Arxitektor sohasini egallamoqchi bo'lganllar matematika va ingliz tilidan bilimlarni mustahkamlashlari talab etiladi. Matematika - dasturlashda, kodlarda uchraydigan xatoliklar, muammolarni hal qilishda yordam beradi. Ingliz tili - dasturlash sohasidagi bilimlarni asosiy qismi ingliz tilida bo'lganligi uchun , agar ingliz tilini bilsangiz ko'proq mustaqil ishlay olishingiz va ko'proq bilimga ega bo'lishingiz mumkin."}/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">


                            <input hidden id={"faqAttachment"} type="file"
                                   onChange={(e) => previewImage(e, "faq" + "Attachment")}/>
                            <label htmlFor={"faqAttachment"}>
                                <ImgEditor className={"p-0"}>

                                    <img
                                        style={{opacity: loadings["faq" + "AttachmentLoading"] ? '.2' : '1'}}
                                        className={"img-fluid"}
                                        src={attachments["faq" + "AttachmentFromServer"] ? BASE_URL + "api/v1/file/get/" + attachments["faq" + "AttachmentFromServer"] : attachments["faq" + "Attachment"] ? attachments["faq"+ "Attachment"] : state.faqAttachment ? BASE_URL + "api/v1/file/get/" + state.faqAttachment : juggling}
                                        alt=""/>

                                    {loadings["faq" + "AttachmentLoading"] ?
                                        <div className={"iconLoadingWrapper"}>
                                            <div className={"icon_loading"}>
                                                <Spin indicator={antIcon}/>
                                            </div>
                                        </div> : ""}
                                    {attachments["faq" + "AttachmentFromServer"] ? "" : attachments["faq" + "Attachment"] ?
                                        <Button
                                            onClick={() => saveAttachment(attachments["faq" + "AttachmentFile"], "faq" + "Attachment")}
                                            className={"ant-btn-block d-block mt-2"}>Upload</Button> : ""}
                                </ImgEditor>
                            </label>

                        </div>
                    </div>


                </div>
            </section>
            <Footer/>
            {/*    modal*/}

            <>
                <Modal title="Kasbni saqlaymizmi?" visible={showModal} onOk={saveQuiz} confirmLoading={loading}
                       onCancel={!loading ? openModal : ""}>
                    <label htmlFor="inputofsalary">Yillik maosh ko'pchilikni qiziqtirsa kerak...</label>
                    <Input id={"inputofsalary"}
                           onChange={(e) => collectJobData({name: "yearlySalary", value: e.target.value})}
                           defaultValue={state.yearlySalary && state.yearlySalary}
                           placeholder="masalan -> 112.000$ - 130.000$" required/>
                </Modal>
            </>


        </Spin>
    );
}
