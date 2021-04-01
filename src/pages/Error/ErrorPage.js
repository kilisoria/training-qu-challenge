import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div>
      <div color="danger light">
        <h4 className="alert-heading">
          <p>Oh, no! We ran into an issue.</p>
        </h4>
      </div>
      <div className="error-container">
        <p>
         This is embarassing. We can't find what you were looking for.
          </p>
        <div>
          <Link to={`/`}>
              Accept
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
