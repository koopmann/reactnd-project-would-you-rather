import React from "react";
import { Link } from "react-router-dom";

function NoMatchingUrl() {
  return (
    <div >
      <h1>HTTP 404</h1>
      <p>sorry but this page doesn't exists</p>
      <Link to="/">go to home</Link>
    </div>
  );
}

export default NoMatchingUrl;
