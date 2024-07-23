import React from "react";
import ReactDOM from "react-dom/client";

import restaurantList from "./restaurantList";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <header className="header">
      <img
        src="https://www.designmantic.com/logo-images/166328.png?company=Company%20Name&keyword=food%20icon&slogan=&verify=1"
        className="appLogo"
      />
      <nav className="navlist">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

const RestaurantCard = (props) => {
  const { data } = props;
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    data?.info;
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        className="cardIcon"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const RestaurantContainer = () => {
  return (
    <>
      <div className="search">Search</div>
      <section className="cardContainer">
        {restaurantList.map((restaurant) => (
          <RestaurantCard data={restaurant} key={restaurant.info.id} />
        ))}
      </section>
    </>
  );
};

const AppLayout = () => {
  return (
    <main className="app">
      <Header />
      <RestaurantContainer />
    </main>
  );
};

root.render(<AppLayout />);
