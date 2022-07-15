import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllData, instance } from '../../redux/actions'
import Progress from '../ProgressBar'
import QuizJobCard from '../QuizJobCard'
import TestCard from '../TestCard'
import TestFooter from '../TestFooter'
import { QuizJobCardWrapper } from '../../styles'
export default function Testing() {
   const [allData, setAllData] = useState({})
   const allQuestions = useSelector((state) => state.allDatas?.allData)
   const dispatch = useDispatch()
   const { id } = useParams()
   const [disabled, setDisabled] = useState(false)
   const [isTrue, setIstrue] = useState(false)
   const [message, setMessage] = useState("Kutilmoqda")
   const [allQ, setAllQ] = useState({})
   const [loader, setLoader] = useState(false)
   const getTestQuestions = async () => {

      try {
         setLoader(true)
         const response = await instance.get(`api/v1/platform_user/get_user_question/${id}`)
         setAllQ({ ...response.data.data })
         console.log("allQ", allQ);
         console.log("response", response.data.data);
         setDisabled(false)
         setLoader(false)
      } catch (err) {

      }
   }
   useEffect(() => {
      getTestQuestions()
      // console.log("hamasi", allQuestions);
   }, [id])

   useEffect(() => {
      console.log(allQ);
   }, [allQ])

   const select = (i) => {
      setDisabled(true)
      const exactAnswer = allQ?.question.answers.filter((item) => item.id === i)
      console.log(exactAnswer);
      if (exactAnswer[0].isTrue) {
         setMessage("Javobingiz to'gri")
         setIstrue(true)
      } else {
         setMessage("Javobingiz xato")
         setIstrue(false)
      }
      instance.post("api/v1/platform_user/save_user_answer", {
         "userId": `${allQ.userId}`,
         "answerId": `${exactAnswer[0].id}`
      }).then((res) => {
         console.log(res.data);
      }).catch((err) => {
         console.log(err);
      })
   }
   if (loader) {
      return <h1>Loading...</h1>
   }
   return (
      <>
         <section className='py-5'>
            <div className="container">

               {/* <Progress now={allQ.questionNumber} />

               <div className="row">
                  <div className="colorH1">{allQ.questionNumber}. {allQ.question.title}</div>
               </div>
               <div className="row justify-content-center">
                  {
                     allQ.question.answers.map((e, i) => {
                        return <label htmlFor={e.id} className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3'>

                           <QuizJobCardWrapper>
                              <div className="positionInput">
                                 <input defaultChecked={false} disabled={disabled} id={e.id} onChange={() => select(e.id)} name="quizId" type="radio" className="form-check-input" />
                              </div>
                              <div>
                                 <p>{e.answer}</p>
                              </div>
                           </QuizJobCardWrapper>
                        </label>
                     })}
               </div> */}
            </div>
         </section>
         <TestFooter getTestQuestions={getTestQuestions} isTrue={isTrue} message={message} allCount={allQuestions.allQuestionsCount} count={allQuestions.questionNumber} />
      </>
   )
}
