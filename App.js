const heading = React.createElement(
  "div",
  { id: "hello-id"},
  [
    React.createElement("div", { id: "child-1" }, [
      React.createElement("h1", {}, "Div 1 - Heading 1 "),
      React.createElement("h2", {}, "Div 1 - Heading 2 "),
    ]),
    React.createElement("div", { id: "child-2" }, [
      React.createElement("h1", {}, "Div 2 - Heading 1 "),
      React.createElement("h2", {}, "Div 2 - Heading 2 "),
    ]),
  ]
);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
reactRoot.render(heading)