import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getAllData, instance } from '../../redux/actions'
import ProgressCustom from '../ProgressBar'
import QuizJobCard from '../QuizJobCard'
import TestCard from '../TestCard'
import TestFooter from '../TestFooter'
import { QuizJobCardWrapper } from '../../styles'
import Result from '../Result'
import { Progress } from 'antd'
import { Spin } from 'antd'
import Reyting from '../../pages/Reyting'
import { ClockCircleFilled, ClockCircleOutlined } from '@ant-design/icons'
import WatchClock from '../WatchClock'

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
   const [count, setCount] = useState(0)
   const [resultMessage, setResultMessage] = useState(
      'Sizdagi bilimlar qoniqarli emas'
   )
   const getTestQuestions = async () => {
      console.log(check);
      setCheck(false)
      try {
         setLoader(true)
         const res = await instance.get(
            `api/v1/platform_user/get_user_question/${id}`
         )
         setAllQ(res.data.data)
         setDisabled(false)
         setLoader(false)
      } catch (err) {
         console.log('getQuestions err', err)
      }
   }

   useEffect(() => {
      getTestQuestions()
   }, [])

   const select = (i) => {
      setCheck(true)
      setDisabled(true)
      const exactAnswer = allQ?.question.answers.filter((item) => item.id === i)
      console.log(allQ);
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
      }).then((res) => {
         console.log(res.data);
      })
      setCount(allQ.questionNumber)
   }

   if (allQ.allQuestionsCount == 0) {
      return <h1>Savollar mavjud emas</h1>
   }

   const watchClock = () => {
      return <ClockCircleFilled />
   }
   return (
      <Spin spinning={loader}>
         {allQ.question == null ? (
            <div className='p-5 '>

               <div>
                  {allQ.result ? (
                     <>
                        <div>
                           {allQ.result.trueAnsweredQuestions >= 5 ? (
                              <>

                                 <Reyting h1={"Tabriklaymiz!!!"} p={"O’z kelajagingizni tanlagan sohangiz bilan bog’lash uchun sizda yetarli bilimlar mavjud "} />
                              </>

                           ) : (
                              <>
                                 <Reyting h1={
                                    "Sizdagi bilimlar qoniqarli emas"
                                 } p={
                                    "Siz boshqa kasbda qobiliyatli ekanligingizga ishonamiz!"
                                 } />
                              </>
                           )}
                        </div>
                        <Result
                           resultMessage={resultMessage}
                           setResultMessage={setResultMessage}
                           savollarSoni={allQ.result.answersCount}
                           trueAnswerCount={allQ.result.trueAnswersCount}
                           time={allQ.result.time}
                        />
                     </>
                  ) : (
                     <div>
                        <h1></h1>
                        <Link to={'/'}></Link>
                     </div>
                  )}
               </div>
            </div>
         ) : (
            <>
               <section className='py-5'>
                  <div className='container '>
                     <div className="bg-white px-2 py-1 rounded">
                        <Progress format={() => <WatchClock />} strokeWidth={12} percent={Math.round((100 / allQ.allQuestionsCount) * count)} />
                     </div>
                     <div className="d-flex">
                        <div>
                        </div>
                        <div>
                           {/* <ClockCircleOutlined /> */}
                        </div>
                     </div>

                     <div className='row'>
                        <div className='colorH1 mt-2'>
                           {allQ.question &&
                              `${allQ?.questionNumber + '' + '. ' + allQ.question?.title}`}
                        </div>
                     </div>
                     <div className='row justify-content-center'>
                        {allQ.question ? (
                           allQ.question?.answers?.map((e, i) => {
                              return (
                                 <label
                                    key={e.id}
                                    htmlFor={e.id}
                                    className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3'
                                 >
                                    <QuizJobCardWrapper>
                                       <div className='positionInput'>
                                          <input
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
                           <h1>Savollar tugadi</h1>
                        )}
                     </div>
                  </div>
               </section>

               {check ? (
                  <TestFooter
                     check={check}
                     setCheck={setCheck}
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
      </Spin>
   )
}