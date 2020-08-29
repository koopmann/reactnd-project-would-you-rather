import { addAnswerToQuestion } from "./questionactions";
import { _saveQuestionAnswer } from "../../_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

import {
  GET_USERS,
  ADD_QUESTION_TO_USER,
  ADD_VOTE_TO_USER,
} from "./constants";


const addAnswerToUser = (qid, author, option) => {
  return {
    type: ADD_VOTE_TO_USER,
    qid,
    author,
    option,
  };
};

export const fetchUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const addQuestionToUser = (id, authUser) => {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    authUser,
  };
};

export function handleSaveQuestionAnswer(authUser, qid, option) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(addAnswerToUser(qid, authUser, option));
    dispatch(addAnswerToQuestion(qid, authUser, option));

    return _saveQuestionAnswer({ authedUser: authUser, qid, answer: option })
      .then(() => {
        dispatch(hideLoading());
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };
}
