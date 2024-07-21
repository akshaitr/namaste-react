import React from "react";
import ReactDOM from "react-dom/client";

import search from "./assets/search.png";
import user from "./assets/user.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => (
  <>
    <h2>Search</h2>
    <section className="container">
      <img src={search} alt="Search" />
      <input
        name=""
        placeholder="Enter the location here"
        className="inputField"
      />
      <img src={user} alt="user" className="userIcon" />
    </section>
  </>
);

root.render(<Header />);
