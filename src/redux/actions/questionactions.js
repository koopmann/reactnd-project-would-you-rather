import { showLoading, hideLoading } from "react-redux-loading";
import { ADD_ANSWER, GET_QUESTIONS, ADD_QUESTION } from "./constants";
import { _saveQuestion } from "../../_DATA";
import { addQuestionToUser } from "./useractions";


export const fetchQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const addAnswerToQuestion = (qid, authedUser, option) => {
  return {
    type: ADD_ANSWER,
    qid,
    authedUser,
    option,
  };
};

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question.id, author));
        dispatch(hideLoading());
      }
    );
  };
}
