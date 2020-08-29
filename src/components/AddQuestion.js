import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../redux/actions/questionactions";

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  addQuestion = (e) => {
    e.preventDefault();
    const { auth } = this.props;

    this.props
      .dispatch(
        handleSaveQuestion(this.state.optionOne, this.state.optionTwo, auth)
      )
      .then(() => {
        this.props.history.push("/");
      });
  };

  onOptionOneChange = (e) => {
    const optionOne = e.target.value;
    this.setState({
      optionOne,
    });
  };

  onOptionTwoChange = (e) => {
    const optionTwo = e.target.value;
    this.setState({
      optionTwo,
    });
  };

  render() {
    return (
      <div >
        <h1>Add a new Question</h1>
        <form onSubmit={this.addQuestion}>
          <input
            type="text"
            value={this.state.optionOne}
            onChange={this.onOptionOneChange}
            placeholder="Enter Option One"
            required
          />
          <input
            type="text"
            value={this.state.optionTwo}
            onChange={this.onOptionTwoChange}
            placeholder="Enter Option Two"
            required
          />
          <button type="submit" >
            Add Question
          </button>
        </form>
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(AddQuestion);
