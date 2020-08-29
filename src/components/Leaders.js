import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderItem from "./LeaderItem";

class Leaders extends Component {
  render() {
    return (
      <div>
        <h1>Leaderboard</h1>
        {this.props.userIds.map((user) => {
          return (
            <LeaderItem key={user} id={user}>
              {user}
            </LeaderItem>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    authedUser: users.authedUser,
    userIds: Object.keys(users).sort(
      (a, b) => getCount(users[b]) - getCount(users[a])
    ),
  };
};

const getCount = (user) => {
  return user.questions.length + Object.keys(user.answers).length;
};

export default connect(mapStateToProps)(Leaders);
