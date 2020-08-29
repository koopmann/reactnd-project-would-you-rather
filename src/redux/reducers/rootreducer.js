import { loadingBarReducer } from "react-redux-loading";
import { combineReducers } from "redux";
//reducers
import users from "./userreducer";
import questions from "./questionsreducer";
import auth from "./authreducer";

export default combineReducers({
  loadingBar: loadingBarReducer,
  users,
  questions,
  auth,
});
