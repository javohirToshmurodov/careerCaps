import { combineReducers } from "redux";
import jobsReducers, { questionsReducers } from "./reducers";

const rootReducer = combineReducers({
  jobsData: jobsReducers,
  questionsData: questionsReducers,
});

export default rootReducer;
