import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderItem extends Component {
  render() {
    const { id, name, avatarURL, questions, answers } = this.props.user;
    const answeredQuestions = Object.keys(answers).length;
    const createdQuestions = questions.length;
    return (
      <div style={{marginLeft: "30%", marginBottom: "1cm", marginRight: "30%", borderWidth: "2px", borderStyle: "solid", borderColor: "black"}}>
        <img src={avatarURL}  alt={id} width="50"
             height="60"/>
        <div>
          <span >{name}</span>
          <p>Answered Questions : {answeredQuestions}</p>
          <p>Created Questions : {createdQuestions}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }, { id }) => {
  return {
    user: users[id],
  };
};

export default connect(mapStateToProps)(LeaderItem);
