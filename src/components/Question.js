import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../redux/actions/useractions";
import Progress from "./Progress";


class Question extends Component {
  handlePoll = (option) => {
    const { authedUser, question } = this.props;
    this.props.dispatch(
      handleSaveQuestionAnswer(authedUser, question.id, option)
    );
  };

  render() {
    const { isNotExists, history } = this.props;
    if (isNotExists) {
      history.push("/somethingunknown");
      return null;
    }
    const { question, author, isAnswered, vote } = this.props;
    const { name, avatarURL } = author;
    const { optionOne, optionTwo } = question;

    return (
      <div>
        <div >
          <div>{name} asks:</div>
          <div >
            <div>
              <img src={avatarURL} alt="avatar"  width="50"
                   height="60" />
            </div>
            <span  />
            <div>
              <span >Would you rather..</span>
              <h2>Possible Answers:</h2>
              {isAnswered ? (
                  <div>
                    <Progress
                        text={optionOne.text}
                        isA={true}
                        voteA={optionOne.votes.length}
                        voteB={optionTwo.votes.length}
                        vote={vote === "optionOne"}
                    />
                    <Progress
                        text={optionTwo.text}
                        voteA={optionOne.votes.length}
                        voteB={optionTwo.votes.length}
                        vote={vote === "optionTwo"}
                        isA={false}
                    />
                  </div>
              ) : (
                <div>
                  <button
                    style={{width: "7rem", height: "3rem"}}
                    onClick={() => this.handlePoll("optionOne")}
                  >
                    {optionOne.text}
                  </button>
                  <button
                    style={{width: "7rem", height: "3rem"}}
                    onClick={() => this.handlePoll("optionTwo")}
                  >
                    {optionTwo.text}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, users, questions }, { match, history }) => {
  const { question_id } = match.params;
  const question = questions[question_id];
  if (!question) {
    return {
      isNotExists: true,
      history: history
    };
  }

  const authedUser = users[auth];
  const isAnswered = Object.keys(authedUser.answers).includes(question_id);

  const authorId = questions[question_id].author;
  const author = users[authorId];

  return {
    question,
    author,
    authedUser: auth,
    isAnswered,
    isNotExists: false,
    vote: isAnswered ? authedUser.answers[question_id] : "",
  };
};

export default connect(mapStateToProps)(Question);
