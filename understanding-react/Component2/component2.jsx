import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  return (
    <div>
    <h3>Query: {props.search}</h3>
    <p>Category: {props.category}</p>
    <p>Skill: {props.skill}</p>
    <p>Page: {props.page}</p>
    </div>
  );
}

ReactDOM.render(
  <App
  search="lens"
  category="travel"
  skill="new to photography"
  page="2"
  />,
  document.getElementById("root")
);