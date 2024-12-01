import React from "react";
import Header from "../Header";
import notfoundImage from "../../assets/not-found-image.webp";

import "./index.css";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="not-found-container">
        <div>
          <img
            src={notfoundImage}
            alt="Not Found"
            className="not-found-image"
          />
        </div>
        <h1> Oops!!! Something went wrong!</h1>
      </div>
    </div>
  );
};

export default NotFound;
