import React from 'react'
import { useState } from 'react';
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default function EditModalQuestion(props) {
   const [questions, setQuestions] = useState([])
   const [questionTitle, setQuestionTitle] = useState(props.questionTitle)
   const editQuestion = () => {

   }

   const addInput = () => {
      props.questions.push({
         answer: "",
         isTrue: false,
      });
      props.setQuestions([...questions]);
   };
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
                     placeholder="savol matni"
                     className="form-control"
                     required
                  />
                  <button className="btn btn-dark" onClick={addInput}>
                     +
                  </button>
               </div>
               <div>
                  {questions.map((e, i) => (
                     <div className="d-flex px-5 gap-2 mt-2">
                        <input
                           type={"text"}
                           onChange={(e) => props.addVariant(e, i)}
                           className="form-control mb-2"
                           placeholder="variant kiriting..."
                        />
                        <input
                           onChange={(e) => props.handleChange(e, i)}
                           name={"name"}
                           type="radio"
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
