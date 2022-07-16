import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getAllData, instance } from '../../redux/actions'
import Progress from '../ProgressBar'
import QuizJobCard from '../QuizJobCard'
import TestCard from '../TestCard'
import TestFooter from '../TestFooter'
import { QuizJobCardWrapper } from '../../styles'
import Result from '../Result'
import Spinner from 'react-bootstrap/Spinner';
import Reyting from '../../pages/Reyting'

export default function Testing() {
   const [allData, setAllData] = useState({})
   const allQuestions = useSelector((state) => state.allDatas?.allData)
   const dispatch = useDispatch()
   const { id } = useParams()
   const [disabled, setDisabled] = useState(false)
   const [isTrue, setIstrue] = useState('')
   const [message, setMessage] = useState('Kutilmoqda')
   const [allQ, setAllQ] = useState({})
   const [loader, setLoader] = useState(false)
   const [check, setCheck] = useState(false)
   const [showResult, setShowResult] = useState(false)
   const [resultMessage, setResultMessage] = useState("Sizdagi bilimlar qoniqarli emas")
   const getTestQuestions = async () => {
      setCheck(false)
      try {
         setLoader(true)
         const res = await instance.get(
            `api/v1/platform_user/get_user_question/${id}`
         )
         setAllQ(res.data.data)
         setDisabled(false)
         setLoader(false)
         console.log(res.data.data)
      } catch (err) {
         console.log('getQuestions err', err)
      }
   }

   useEffect(() => {
      getTestQuestions()
      console.log(allQ)
   }, [])

   const select = (i) => {
      setCheck(true)
      setDisabled(true)
      const exactAnswer = allQ?.question.answers.filter((item) => item.id === i)

      if (exactAnswer[0].isTrue) {
         setMessage("Javobingiz to'gri")
         setIstrue(true)
      } else {
         setMessage('Javobingiz xato')
         setIstrue(false)
      }
      instance.post('api/v1/platform_user/save_user_answer', {
         userId: `${allQ.userId}`,
         answerId: `${exactAnswer[0].id}`,
      })
   }

   if (loader) {
      return <Spinner animation="grow" />
   }
   return (
      <>
         {allQ.question == null ? (
            <div className='p-5'>
               <button className='searchButton' onClick={() => setShowResult(!showResult)}>
                  Natijani korish
               </button>
               {showResult && (
                  <div>
                     {allQ.result ? (
                        <>
                           <p className='defaultP'>
                              {allQ.result.answersCount} ta savoldan
                              {allQ.result.trueAnswersCount} tasiga to'g'ri javob berdingiz
                              Test uchun ketkazgan umumiy vaqtingiz : {allQ.result.time}
                           </p>
                           <Result resultMessage={resultMessage} setResultMessage={setResultMessage} savollarSoni={allQ.result.answersCount} trueAnswerCount={allQ.result.trueAnswersCount} time={allQ.result.time} />
                           <Reyting />
                        </>
                     ) : (
                        <div>
                           <h1>Nomalum xatolik</h1>
                           <Link to={'/'}>Bosh sahifaga qaytish</Link>
                        </div>
                     )}
                  </div>
               )}
            </div>
         ) : (
            <>
               <section className='py-5'>
                  <div className='container'>
                     <Progress now={allQ?.questionNumber} />

                     <div className='row'>
                        <div className='colorH1'>
                           {allQ.question &&
                              `${allQ?.questionNumber + '' + '.' + allQ.question?.title}`}
                        </div>
                     </div>
                     <div className='row justify-content-center'>
                        {allQ.question ? (
                           allQ.question?.answers?.map((e, i) => {
                              return (
                                 <label
                                    key={i}
                                    htmlFor={e.id}
                                    className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3'
                                 >
                                    <QuizJobCardWrapper>
                                       <div className='positionInput'>
                                          <input
                                             defaultChecked={false}
                                             disabled={disabled}
                                             id={e.id}
                                             onChange={() => select(e.id)}
                                             name='quizId'
                                             type='radio'
                                             className='form-check-input'
                                          />
                                       </div>
                                       <div>
                                          <p>{e.answer}</p>
                                       </div>
                                    </QuizJobCardWrapper>
                                 </label>
                              )
                           })
                        ) : (
                           <h1>Savollar mavjud emas</h1>
                        )}
                     </div>
                  </div>
               </section>

               {check ? (
                  <TestFooter
                     getTestQuestions={getTestQuestions}
                     isTrue={isTrue}
                     message={message}
                     allCount={allQ.allQuestionsCount}
                     count={allQ.questionNumber}
                  />
               ) : (
                  ''
               )}
            </>
         )}
      </>
   )
}
