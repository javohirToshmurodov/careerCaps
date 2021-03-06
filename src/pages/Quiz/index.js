import React, { useState } from 'react'
import QuizForm from '../../components/QuizForm'
import SearchForm from '../../components/SearchForm'
import QuizJobCard from '../../components/QuizJobCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { instance, loadJobs } from '../../redux/actions'
import TestWarningModal from '../../components/TestWarningModal'
import { Spin } from 'antd'
export default function Quiz() {
  const dispatch = useDispatch()
  const kasb = useSelector((state) => state.jobsData.quizzes)
  const [isChecked, setIsChecked] = useState(false)
  const [kasblar, setKasblar] = useState([])
  const [loader, setLoader] = useState(false)
  const [user, setUser] = useState({
    gender: '',
    name: '',
    age: '',
    quizId: '',
  })
  const [show, setShow] = useState(false)
  const [userId, setUserId] = useState('')
  const [quizId, setQuizId] = useState('')
  const checkRadio = (e) => { }
  const searchJob = (e = '') => {
    if (e.trim().length === 0) {
      setKasblar([...kasb])
      return
    }
    const arr = kasblar.filter((item) =>
      item.name.toLowerCase().includes(e.toLowerCase())
    )
    setKasblar([...arr])
  }
  useEffect(() => {
    dispatch(loadJobs())
  }, [])

  useEffect(() => {
    setKasblar([...kasb])
  }, [kasb])
  const select = (e) => {
    const { name, value } = e.target
    user[name] = value
    setUser({ ...user })
  }
  const handleShow = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
  const valid = ({ name, age, gender, quizId }) => {
    const err = {}

    if (!name) {
      err.name = "Iltimos to'liq ismingizni kiriting"
    } else if (name.length > 25) {
      err.name = 'Ismingiz uzunligi 25 ta belgidan oshmasligi kerak'
    }

    if (!age) {
      err.age = 'Iltimos username kiriting'
    }
    if (!gender) {
      err.gender = 'Iltimos jinsingizni tanlang'
    }
    if (!quizId) {
      err.quizId = 'iltimos kasbingizni tanlang'
    }

    return {
      errMsg: err,
      errLength: Object.keys(err).length,
    }
  }
  const handleSubmit = (e) => {

    e.preventDefault()
    const res = valid(user)
    if (res.errLength) {
      return alert("To'ldirilganligiga ishonch hosil qiling")
    }
    setLoader(true)
    instance
      .post('api/v1/platform_user/create_with_quiz', user)
      .then((res) => {
        setUserId(res?.data.data.userId)
        setQuizId(res?.data.data.quizId)
        setLoader(false)
      })
      .catch((err) => {
        console.log(err)
      })
    handleShow()
  }
  return (
    <Spin spinning={loader}>
      <div className='py-5 container px-5'>
        <QuizForm
          select={select}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </div>
      <section className='py-5'>
        <div className='container px-5'>
          <h1 className='colorH1'>Kasbni tanlang</h1>
          <SearchForm searchJob={searchJob} />
          <div className='row'>
            {kasblar.length === 0
              ? "Bunaqa kasb yo'q"
              : kasblar.map((item, i) => (
                <QuizJobCard
                  select={select}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                  checkRadio={checkRadio}
                  key={i}
                  id={item.id}
                  img={item.attachment}
                  jobName={item.name}
                />
              ))}
            <div className='text-start mt-4'>
              <button onClick={handleSubmit} className='searchButton'>
                Keyingisi
              </button>
              {show ? (
                <TestWarningModal
                  userId={userId}
                  show={show}
                  setShow={setShow}
                  handleClose={handleClose}
                  handleShow={handleShow}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </section>
    </Spin>
  )
}
