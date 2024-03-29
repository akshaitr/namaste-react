import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//     "h1",
//     {
//       id: "heading",
//       xyz: "abc",
//     },
//     "Hello World from React!"
//   );

/**
 * <div>
 *      <div>
 *          <h1>I'm an h1 tag</h1>
 *      </div>
 * </div>
 */
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm an h1 tag")
//   )
// );

/**
 * <div>
 *      <div>
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 */
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ])
// );

/**
 * <div>
 *      <div>
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 * <div>
 *      <div>
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "By Akshai"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
