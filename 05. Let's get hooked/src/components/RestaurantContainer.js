import { useState } from "react";

import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = () => {
  const [resList, setResList] = useState(restaurantList);
  return (
    <>
      <button
        className="filter"
        onClick={() => {
          const topRatedRestaurants = resList.filter(
            (restaurant) => restaurant?.info?.avgRating > 4.5
          );
          setResList(topRatedRestaurants);
        }}
      >
        Top rated restaurants
      </button>
      <section className="cardContainer">
        {resList.map((restaurant) => (
          <RestaurantCard data={restaurant} key={restaurant.info.id} />
        ))}
      </section>
    </>
  );
};

export default RestaurantContainer;
