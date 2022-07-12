import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestion, instance, loadQuestions } from "../../../redux/actions";
import { id } from "../../../redux/actions";
import { ImgWrapper } from "../../../styles";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Collapse } from "antd";
import 'antd/dist/antd.css';
import { DeleteFilled, EditOutlined } from "@ant-design/icons";
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
    <div className="row ">
      <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
        <h3>{questions?.name}</h3>
        <ImgWrapper>
          <img
            src={`http://ec2-35-158-135-234.eu-central-1.compute.amazonaws.com/api/v1/file/get/${questions?.attachment}`}
            alt=""
          />
        </ImgWrapper>
      </div>
      <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
        {questions.questions?.map((e, i) => (
          <div key={i}>

            <div className="d-flex justify-content-end">
              <button className="text-dark btn  p-1 " onClick={() => putQuestions(e)}>
                <FontAwesomeIcon icon={faPen} />
              </button>
              {
                modal ? <EditModalQuestion isEdit={isEdit} show={modal} handleClose={setModal} /> : ''
              }
              <button className=" btn p-1" onClick={(event) => deleteQuestions(event, e.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            <Collapse className="mb-2" defaultActiveKey={["1"]}>
              <Panel header={e.title} key={i} extra={<DeleteFilled style={{ "fontSize": "20px", "color": "#111" }} onClick={(event) => deleteQuestions(event, e.id)} />} >

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


{/* <div key={i}>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id={`heading${i}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${Number(e.id.slice(0, 1)) === Number(e.id.slice(0, 1)) ? e.id.slice(1) : e.id}`}
                  aria-expanded="true"
                  aria-controls={`${Number(e.id.slice(0, 1)) === Number(e.id.slice(0, 1)) ? e.id.slice(1) : e.id}`}
                >
                  {e.title}
                  <button className="btn btn-warning">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="btn btn-danger">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </button>
              </h2>
              <div
                id={e.id}
                className="accordion-collapse collapse "
                aria-labelledby={`heading${i}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {e.answers.map((answer, index) => (
                    <p key={index}>
                      <input
                        className="input-form-check me-3"
                        type="checkbox"
                        defaultChecked={answer.isTrue}
                      />
                      {answer.answer}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}