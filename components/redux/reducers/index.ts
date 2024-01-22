import { combineReducers } from "redux";
import numberReducer from "./numberReducer";
import bracketReducer from "./bracketReducer";

const allReducers = combineReducers({
    numberReducer:numberReducer,
    bracketReducer:bracketReducer
})

export default allReducers