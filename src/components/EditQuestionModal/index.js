import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { instance, putQuestions } from '../../redux/actions';
export default function EditModalQuestion(props) {
   const [questions, setQuestions] = useState({})
   const [questionTitle, setQuestionTitle] = useState(props.questionTitle)
   const dispatch = useDispatch()
   useEffect(() => {
      console.log("bu isEdit", props.isEdit);
      setQuestions({ ...props.isEdit })
   }, [])

   const addInput = () => {
      questions.answers.push({
         answer: "",
         isTrue: false,
      });
      setQuestions({ ...questions });
   };
   const editVariant = (event, index) => {
      questions.answers[index].answer = event.target.value
      console.log(questions.answers[index].answer);
      setQuestions({ ...questions })
   }
   const handleChange = (e, i) => {
      questions?.answers.map((item, index) => {
         if (index === i) {
            item.isTrue = true;
         } else {
            item.isTrue = false;
         }
      });
      setQuestions({ ...questions });
      console.log(questions);
   };

   const editQuestion = () => {
      instance.put(`api/v1/question/edit_question/${questions.id}`, {
         ...questions
      }).then((res) => {
         console.log(res.data);
         setQuestions({})
      })
      props.handleClose(false)
   }
   return (
      <div>
         <Modal show={props.show} onHide={() => props.handleClose(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <label htmlFor="text" className="form-label">
                  Savol matnini kiriting
               </label>
               <div className="d-flex gap-2">
                  <input
                     id="text"
                     autoComplete="off"
                     onChange={(e) => setQuestionTitle(e.target.value)}
                     type="text"
                     defaultValue={questions?.title}
                     placeholder="savol matni"
                     className="form-control"
                     required
                  />
                  <button className="btn btn-dark" onClick={addInput}>
                     +
                  </button>
               </div>
               <div>
                  {props.isEdit.answers?.map((e, i) => (
                     <div className="d-flex px-5 gap-2 mt-2" key={i}>
                        <input
                           type={"text"}
                           onChange={(e) => editVariant(e, i)}
                           className="form-control mb-2"
                           value={e.answer}
                           placeholder="variant kiriting..."
                        />
                        <input
                           onChange={(e) => handleChange(e, i)}
                           name={"name"}
                           type="radio"
                           defaultChecked={e.isTrue}
                        />
                     </div>
                  ))}
               </div>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={() => props.handleClose(false)}>
                  Close
               </Button>
               <Button variant="success" onClick={editQuestion}>
                  Save Changes
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   )
}
