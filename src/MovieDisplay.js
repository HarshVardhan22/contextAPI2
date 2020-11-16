import React from "react";
import "./MovieDisplay.css";

const MovieDisplay = ({ name, price }) => {

    return (
    <div className = "display">
      <h3>Movie Name: {name}</h3>
      <h3>Price: {price}</h3>
    </div>
  );

};

export default MovieDisplay;
