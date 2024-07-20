/**
 * Create an element using React
 */

const heading = React.createElement("h1", {}, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/**
 * Create nested elements using React
 */
const listItem1 = React.createElement("li", { key: "list-item-1" }, "Item 1");
const listItem2 = React.createElement("li", { key: "list-item-2" }, "Item 1");
const listItem3 = React.createElement("li", { key: "list-item-3" }, "Item 1");
const listItem4 = React.createElement("li", { key: "list-item-4" }, "Item 1");
const listItem5 = React.createElement("li", { key: "list-item-5" }, "Item 1");

const unorderedList = React.createElement("ul", { key: "list" }, [
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
]);

const listHeading = React.createElement(
  "h3",
  { key: "listHeading" },
  "Nested React Elements"
);

const listContainer = React.createElement("div", {}, [
  listHeading,
  unorderedList,
]);

const nestedRoot = ReactDOM.createRoot(document.getElementById("nestedRoot"));

nestedRoot.render(listContainer);
