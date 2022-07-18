import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getQuestion, instance, loadQuestions} from "../../../redux/actions";
import {id} from "../../../redux/actions";
import {ImgWrapper} from "../../../styles";
import {faEdit, faPen} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Collapse} from "antd";
import 'antd/dist/antd.css';
import {useAlert} from 'react-alert'
import {DeleteFilled, EditFilled, EditOutlined, LoadingOutlined} from "@ant-design/icons";
import {Spin} from 'antd';

import EditModalQuestion from "../../../components/EditQuestionModal";
import {BASE_URL} from "../../../utils/constans";

export default function RoutesComponent() {
    const {id} = useParams();
    const {Panel} = Collapse;
    const [isEdit, setIsEdit] = useState({})
    const [pictureId, setPictureId] = useState("");
    const [image, setImage] = useState("");
    const [modal, setModal] = useState(false)
    const [imgLoading, setImgLoading] = useState(false)
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questionsData?.questions);
    const alert = useAlert()


    // antd
    const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

    const loadQuestions = () => {
        return function (dispatch) {
            instance
                .get(`api/v1/question/${id}`)
                .then((res) => {
                    dispatch(getQuestion(res?.data.data));
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    };
    // const getAttachments = () => {
    //   instance
    //     .get(`api/v1/file/get/${pictureId}`)
    //     .then((res) => {
    //       setImage(res.data);
    //     })
    //     .catch((err) => console.log(err));
    // };
    const handleFile = (e) => {
        const attachment = {}

        const formData = new FormData();
        formData.append("files", e);
        setImgLoading(true)
        instance
            .post("api/v1/file/saveAttachments", formData)
            .then((res) => {
                instance.put("api/v1/quiz/" + id + "?attachmentId=" + res?.data.data).then(r => {
                    dispatch(loadQuestions())
                    alert.success("Rasm saqlandi")
                    setImgLoading(false)

                })
                attachment.smth = {...res.data.data[0]}

            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteQuestions = (event, id) => {
        try {
            instance.delete(`api/v1/question/delete/${id}`).then((res) => {
                if (res.data.success) {
                    alert("question deleted")
                    dispatch(loadQuestions())
                } else {
                    alert.show(res.data.message)
                }

            });
        } catch (err) {
            console.log(err, 444);
        }
    }
    useEffect(() => {
        dispatch(loadQuestions());
    }, [id]);
    const putQuestions = (e) => {
        setIsEdit(e)
        return setModal(true)
    }

    const extraAll = () => {
        <DeleteFilled/>
    }
    return (
        <div className="row align-items-start">
            <div
                className="col-xl-2 col-lg-2 col-md-12 col-sm-12  col-12 d-flex justify-content-center flex-column align-items-center">

                <label htmlFor="fileee">
                    <input type="file" hidden id={"fileee"} onChange={(e) => handleFile(e.target.files[0])}/>
                    <ImgWrapper>
                        {imgLoading ? <Spin indicator={antIcon}/> :
                            <img width={100}
                                 src={BASE_URL + `api/v1/file/get/${questions?.attachment}`}
                                 alt=""
                            />
                        }
                    </ImgWrapper>
                </label>
                <h5 className="mt-2">{questions?.name}</h5>

            </div>
            <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                {questions.questions?.map((e, i) => (
                    <div key={i}>

                        <div className="d-flex justify-content-end">
                            <button className="text-danger btn p-1" onClick={() => putQuestions(e)}>
                                <FontAwesomeIcon icon={faEdit}/>
                            </button>
                            <button className="text-danger btn p-1" onClick={(event) => deleteQuestions(event, e.id)}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                            {
                                modal ? <EditModalQuestion isEdit={isEdit} show={modal} handleClose={setModal}/> : ''
                            }

                        </div>
                        <Collapse className="mb-2" defaultActiveKey={["1"]}>
                            <Panel header={e.title} key={i} style={{"fontSize": "20px", "color": "#111"}}>

                                {
                                    e.answers.map((answer, index) => (
                                        <>
                                            <p key={index} className="">
                                                <input
                                                    className="input-form-check me-3"
                                                    type="checkbox"
                                                    defaultChecked={answer.isTrue}
                                                />
                                                {answer.answer}
                                            </p>

                                        </>

                                    ))
                                }
                            </Panel>
                        </Collapse>
                    </div>
                ))}
            </div>
        </div>
    );
}