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
          console.log(res.data.data);
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
        console.log(res.data);
        dispatch(loadQuestions())
      });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    console.log("question", questions);
    dispatch(loadQuestions());
    console.log(pictureId);
  }, [id]);
  const putQuestions = () => {


    return setModal(true)
  }
  return (
    <div className="d-flex justify-content-between p-4 ">
      <div>
        <h3>{questions?.name}</h3>
        <ImgWrapper>
          <img
            src={`http://ec2-35-158-135-234.eu-central-1.compute.amazonaws.com/api/v1/file/get/${questions?.attachment}`}
            alt=""
          />
        </ImgWrapper>
      </div>
      <div>
        {questions.questions?.map((e, i) => (
          <>

            <div className="d-flex">
              <button className="text-white btn btn-warning p-1 " onClick={() => putQuestions(e.title, e.answer, e.id, setModal)}>
                <FontAwesomeIcon icon={faPen} />
              </button>
              {
                <EditModalQuestion questions={questions} show={modal} handleClose={setModal} />
              }
              <button className="text-white btn btn-danger p-1" onClick={(event) => deleteQuestions(event, e.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            <Collapsible className="mb-2" trigger={e.title}>
              {
                e.answers.map((answer, index) => (
                  <p key={index}>
                    <input
                      className="input-form-check me-3"
                      type="checkbox"
                      defaultChecked={answer.isTrue}
                    />
                    {answer.answer}
                  </p>
                ))
              }
            </Collapsible>
          </>
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