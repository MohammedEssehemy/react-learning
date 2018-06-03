"use strict";

console.log("src/app.js");
var appRoot = document.getElementById("app");
var app = {
  title: 'React Learning',
  subtitle: 'playground for learning react'
};

var options = [];

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var optionDOM = e.target.elements.option;
  options.push(optionDOM.value);
  optionDOM.value = "";
  render();
};
var pickOption = function pickOption() {
  var randIndex = Math.floor(Math.random() * options.length);
  alert(randIndex + 1 + "- " + options[randIndex]);
};

var render = function render() {
  var template = React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "h1",
      null,
      " ",
      app.title,
      " "
    ),
    React.createElement(
      "div",
      null,
      " ",
      app.subtitle,
      " "
    ),
    React.createElement(
      "ol",
      null,
      " ",
      options.map(function (e, i) {
        return React.createElement(
          "li",
          { key: i },
          " ",
          e,
          " "
        );
      })
    ),
    options.length ? React.createElement(
      "button",
      { onClick: pickOption },
      "what shoud I do"
    ) : React.createElement(
      "p",
      null,
      "you don't have any options"
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
