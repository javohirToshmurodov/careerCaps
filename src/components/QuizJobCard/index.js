import React from 'react'
import { QuizJobCardWrapper } from '../../styles'
import {BASE_URL} from "../../utils/constans";

export default function QuizJobCard(props) {
  return (
    <label
      htmlFor={props.id}
      className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-3'
    >
      <QuizJobCardWrapper>
        <div className='positionInput'>
          <input
            id={props.id}
            value={props.id}
            onChange={(e) => props.select(e)}
            name='quizId'
            type='radio'
            className='form-check-input'
          />
        </div>
        <div>
          <img
            className='img-fluid'
            src={BASE_URL`api/v1/file/get/${props.img}`}
            alt=''
          />
          <h3>{props.jobName}</h3>
        </div>
      </QuizJobCardWrapper>
    </label>
  )
}
