import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = ({ users, questions }, { id }) => {
  const questionItem = questions[id];
  let { author } = questionItem;
  author = users[author];

  return {
    question: questionItem,
    author,
  };
};

class SingleQuestion extends Component {
  render() {
    const { name, avatarURL } = this.props.author;
    const { id, optionOne, optionTwo } = this.props.question;
    const { isAnswered } = this.props;
    return (
      <div style={{marginLeft: "30%", marginBottom: "1cm", marginRight: "30%", borderWidth: "2px", borderStyle: "solid", borderColor: "black"}}>
        <div style={{}}>{name} asks:</div>
        <div >
          <div>
            <img src={avatarURL} alt="avatar"  width="50"
                 height="60" />
          </div>
          <span  />
          <div>
            <span >Would you rather</span>
            <p
              style={{
                fontSize: 14,
              }}
            >
              {optionOne.text}
            </p>
            <p
              style={{
                fontSize: 14,
              }}
            >
              {optionTwo.text}
            </p>
            <Link  to={`questions/${id}`}>
              {!isAnswered ? "Answer" : "View Results"}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SingleQuestion);
