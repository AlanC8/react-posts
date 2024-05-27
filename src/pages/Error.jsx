import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>Error this is Error page</h1>
      <Link to="/posts">К постам</Link>
    </div>
  );
};

export default Error;
