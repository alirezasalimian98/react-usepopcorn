import React from "react";
import { useState } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color={"blue"} onSetRating={setMovieRating} />
      <p>Movie rating is {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating maxRating={5} message={["a", "b", "c", "d", "d"]} />
    <Test />
  </React.StrictMode>
);
