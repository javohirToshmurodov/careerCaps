import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestion, instance, loadQuestions } from "../../../redux/actions";
import { id } from "../../../redux/actions";
import { ImgWrapper } from "../../../styles";
import { faEdit, faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Collapse } from "antd";
import 'antd/dist/antd.css';
import { DeleteFilled, EditFilled, EditOutlined } from "@ant-design/icons";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Example from "../../../components/accardion";
import Collapsible from "react-collapsible";
import EditModalQuestion from "../../../components/EditQuestionModal";
export default function RoutesComponent() {
  const { id } = useParams();
  const { Panel } = Collapse;
  const [isEdit, setIsEdit] = useState({})
  const [pictureId, setPictureId] = useState("");
  const [image, setImage] = useState("");
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionsData?.questions);
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
  //       console.log(res.data);
  //       setImage(res.data);
  //       console.log("image", image);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const deleteQuestions = (event, id) => {
    try {
      instance.delete(`api/v1/question/delete/${id}`).then((res) => {
        alert("question deleted")
        dispatch(loadQuestions())
      });
    } catch (err) {
      console.log(err);
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
    <DeleteFilled />
  }
  return (
    <div className="row align-items-start">
      <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12  col-12 d-flex justify-content-center flex-column align-items-center">
        <ImgWrapper>
          <img
            src={`http://ec2-35-158-135-234.eu-central-1.compute.amazonaws.com/api/v1/file/get/${questions?.attachment}`}
            alt=""
          />
        </ImgWrapper>
        <h5 className="mt-2">{questions?.name}</h5>
      </div>
      <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
        {questions.questions?.map((e, i) => (
          <div key={i}>

            <div className="d-flex justify-content-end">
              <button className="text-danger btn p-1" onClick={(event) => deleteQuestions(event, e.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button className="text-danger btn p-1" onClick={() => putQuestions(e)} >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              {
                modal ? <EditModalQuestion isEdit={isEdit} show={modal} handleClose={setModal} /> : ''
              }

            </div>
            <Collapse className="mb-2" defaultActiveKey={["1"]}>
              <Panel header={e.title} key={i} style={{ "fontSize": "20px", "color": "#111" }}>

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
    </div >
  );
}