import * as types from "./actionType";

const initialState = {
  quizzes: [],
};
 const jobsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_JOBS: {
      return {
        ...state,
        quizzes: action.payload,
      };
    }
    default:
      return state;
  }
};
export default jobsReducers