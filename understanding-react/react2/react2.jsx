import React from "react";
import ReactDOM from "react-dom";

var header = (<h1>Hello,</h1>);
var subheader = (<h2>Voila!</h2>);
var name = "Lori Smith!";
var url = "https://mimo.app/i/lori.png";

var app = (
  <div>
  {header}
  {name}
  {subheader}
  <img src= {url} alt="Lori's Profile" />
  </div>
)
ReactDOM.render(
  app,
    document.getElementById("root")
);
