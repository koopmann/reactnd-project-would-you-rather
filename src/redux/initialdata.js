import { showLoading, hideLoading } from "react-redux-loading";
import { _getUsers, _getQuestions } from "../_DATA";
import { fetchUsers } from "./actions/useractions";
import { fetchQuestions } from "./actions/questionactions";


function getAllData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function getInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getAllData().then(({ users, questions }) => {
      dispatch(fetchQuestions(questions));
      dispatch(fetchUsers(users));
      dispatch(hideLoading());
    });
  };
}
