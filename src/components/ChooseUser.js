import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authactions";



class ChooseUser extends Component {
  state = {
    active: "tylermcginnis",
  };

  selectUser = (user) => {
    this.setState({
      active: user.id,
    });
  };

  signInUser = () => {
    this.props.dispatch(loginUser(this.state.active));
  };

  render() {
    if (this.props.loading) return <div></div>;

    return (
      <div>
        <span style={{fontSize: 26}}>- Hey let's play "Would you rather?" - </span>
        <p>Please choose a user to start</p>
        <div >
          {Object.keys(this.props.users).map((keyName, i) => (
            <div
              onClick={() => this.selectUser(this.props.users[keyName])}
              key={keyName}
            >
              <img
                alt="user-avatar"
                src={this.props.users[keyName].avatarURL}
                width="50"
                height="60"
              />
              <p >
                {this.props.users[keyName].name}
              </p>
            </div>
          ))}
        </div>
        <button
          style={{
            width: "20rem", height: "3rem", fontSize: 14
          }}
          onClick={this.signInUser}
        >{`Go on as ${this.state.active}`}</button>
      </div>
    );
  }
}


const mapStateToProps = ({ loadingBar, users }) => {
    return {
        users,
        loading: loadingBar.default,
    };
};
export default connect(mapStateToProps)(ChooseUser);
