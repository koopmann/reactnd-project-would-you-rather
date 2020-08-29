import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter, Switch } from "react-router-dom";


//
import LoadingBar from "react-redux-loading";
import './App.css';

import {getInitialData} from "./redux/initialdata";
import {signOutUser} from "./redux/actions/authactions";

import ChooseUser from "./components/ChooseUser";
import Navigation from "./components/Navigation";
import QuestionList from "./components/QuestionList";
import Leaders from "./components/Leaders";
import AddQuestion from "./components/AddQuestion";
import Question from "./components/Question";
import NoMatchingUrl from "./components/NoMatchingUrl";


class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  signOut = () => {
    this.props.dispatch(signOutUser());
  };

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <LoadingBar />
            {this.props.auth === null ? (
                <Route render={() => <ChooseUser />} />
            ) : (
                <div >
                  <Navigation authedUser={this.props.users[this.props.auth].name} signOut={this.signOut} />
                  <div >
                    <Switch>
                      <Route exact path="/" component={QuestionList} />
                      <Route path="/leaderboard" component={Leaders} />
                      <Route path="/add" component={AddQuestion} />
                      <Route
                          path="/questions/:question_id"
                          component={Question}
                      />
                      <Route path="/questions/somethingunknown" component={NoMatchingUrl} />
                      <Route component={NoMatchingUrl} />
                    </Switch>
                  </div>
                </div>
            )}
          </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth, users }) => {
  return {
    auth,
    users
  };
};

export default connect(mapStateToProps)(App);


