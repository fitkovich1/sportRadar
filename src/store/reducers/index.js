import { combineReducers } from "redux";
import scoreBoardReducer from "./scoreBoard";

export const rootReducer = combineReducers({
  scoreBoard: scoreBoardReducer
})