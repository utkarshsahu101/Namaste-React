let heading1 = React.createElement(
  "h1",
  { id: "heading1" },
  "Hello World Heading1!"
);
let heading2 = React.createElement(
  "h2",
  { id: "heading2" },
  "Hello World Heading2!"
);
let wrapperContainer = React.createElement("div", { id: "wrapperContainer" }, [
  heading1,
  heading2,
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading, root);
root.render(wrapperContainer);
