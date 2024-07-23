/**
 * Create an element using React
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", {}, "Hello World!");
root.render(heading);

/**
 * Create nested elements using React
 */
const nestedRoot = ReactDOM.createRoot(document.getElementById("nestedRoot"));

const listHeading = React.createElement(
  "h3",
  { key: "listHeading" },
  "Nested React Elements"
);

const listItem1 = React.createElement("li", { key: "list-item-1" }, "Item 1");
const listItem2 = React.createElement("li", { key: "list-item-2" }, "Item 2");
const listItem3 = React.createElement("li", { key: "list-item-3" }, "Item 3");
const listItem4 = React.createElement("li", { key: "list-item-4" }, "Item 4");
const listItem5 = React.createElement("li", { key: "list-item-5" }, "Item 5");
const unorderedList = React.createElement("ul", { key: "list" }, [
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
]);

const listContainer = React.createElement("div", {}, [
  listHeading,
  unorderedList,
]);

nestedRoot.render(listContainer);
