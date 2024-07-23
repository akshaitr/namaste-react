import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import RestaurantContainer from "./components/RestaurantContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <main className="app">
      <Header />
      <RestaurantContainer />
    </main>
  );
};

root.render(<AppLayout />);
