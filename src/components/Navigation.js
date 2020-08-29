import React from "react";
import { NavLink } from "react-router-dom";
export default function Navigation({ authedUser, signOut }) {
  return (
    <div className="nav">
      <span style={{fontSize: 26}} >
        Hello,
        <br /> {authedUser}
      </span>
      <div className="nav-links">
        <NavLink
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/leaderboard"
        >
          Leaderboard
        </NavLink>
        <NavLink
          to="/add"
        >
          New Question/Poll
        </NavLink>
      </div>
        <div >
      <button onClick={signOut}  style={{
          width: "10rem", height: "2rem", fontSize: 14,   justifyContent: "center",
      }}>
        Logout
      </button>
            <hr />
        </div>
    </div>

  );
}
