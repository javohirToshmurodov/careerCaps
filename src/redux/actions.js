import axios from "axios";
import * as types from "./actionType";
export const getJobs = (quizzes) => ({
  type: types.GET_JOBS,
  payload: quizzes,
});

export const accessToken = localStorage.getItem("accesstoken");
export const instance = axios.create({
  baseURL: "http://ec2-35-158-135-234.eu-central-1.compute.amazonaws.com/",
  accept: "*/*",
  "Content-Type": "application/json",
});

export const loadJobs = () => {
  return function(dispatch){
    instance
    .get("api/v1/quiz")
    .then((res) => {
      console.log(res?.data.data);
      dispatch(getJobs(res?.data.data))
    })
    .catch((err) => console.log(err));
  }

};

