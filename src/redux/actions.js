import axios from "axios";
import { useParams } from "react-router-dom";
import * as types from "./actionType";
export const getJobs = (quizzes) => ({
  type: types.GET_JOBS,
  payload: quizzes,
});
export const getQuestion = (questions) => ({
  type: types.GET_QUESTIONS,
  payload: questions,
});
export const postQuestion = (questions) => ({
  type: types.POST_QUESTIONS,
  payload: questions
});

// export const putQuestion = (questions) = ({
//   type: types.PUT_QUESTIONS,
//   payload: questions
// })
export const accessToken = localStorage.getItem("accesstoken");
export const instance = axios.create({
  Authorization: `Bearer ${accessToken}`,
  baseURL: "http://ec2-35-158-135-234.eu-central-1.compute.amazonaws.com/",
  accept: "*/*",
  "Content-Type": "application/json",
});

export const loadJobs = () => {
  return function (dispatch) {
    instance
      .get("api/v1/quiz")
      .then((res) => {
        dispatch(getJobs(res?.data.data));
      })
      .catch((err) => console.log(err));
  };
};
