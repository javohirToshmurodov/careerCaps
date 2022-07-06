import {combineReducers} from "redux";
import  jobsReducers  from "./reducers"

const rootReducer = combineReducers({
    jobsData:jobsReducers,
})

export default rootReducer