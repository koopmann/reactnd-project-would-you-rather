import React, { Component } from "react";
import { connect } from "react-redux";
import SingleQuestion from "./SingleQuestion";

class QuestionList extends Component {
  state = {
    active: "Unanswered",
    items: [
      {
        name: "Unanswered",
      },
      {
        name: "Answered",
      },
    ],
  };

  changeTab = (item) => {
    this.setState({
      active: item,
    });
  };

  render() {
    const isAnswered = this.state.active === "Answered";

    if (this.props.loading)
      return (
        <div>
          <p>Loading</p>
        </div>
      );

    return (
      <div>
        <h1>HomeScreen</h1>
        <h2>Click on question category to select:</h2>

        <nav >
          {this.state.items.map((item) => (
            <div
              key={item.name}
              onClick={() => this.changeTab(item.name)}
            >
              {this.state.active ===  item.name
                  ? (<div style={{fontSize: 24, fontWeight: "bold"}}>
                        {item.name + "(selected)" }
                  </div>)
                : (<div style={{fontSize: 18}}>
                    {item.name }
                  </div>)}
            </div>
          ))}
        </nav>
        <hr />
        <div >
          {isAnswered
            ? this.props.answeredQuestions.map((question) => (
                <SingleQuestion
                  key={question}
                  isAnswered={isAnswered}
                  id={question}
                />
              ))
            : this.props.unansweredQuestions.map((question) => (
                <SingleQuestion
                  key={question}
                  isAnswered={isAnswered}
                  id={question}
                />
              ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, loadingBar, questions, users }) => {
  const allQuestions = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const answeredQuestions = Object.keys(users[auth].answers);
  return {
    authedUser: users[auth],
    loadingBar: loadingBar.default,
    answeredQuestions,
    unansweredQuestions: allQuestions.filter(
      (e) => !answeredQuestions.includes(e)
    ),
  };
};

export default connect(mapStateToProps)(QuestionList);
