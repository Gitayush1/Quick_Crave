import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResList, setSearchResList] = useState([]);

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2067597&lng=79.9406623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);

    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Search for Restaurants"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <button onClick={()=>{
            const searchFilter = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            
            setSearchResList(searchFilter);

        }} className="button">Search</button>
      </div>
      <div className="filter-btn">
        <button
          className="fil-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.7
            );

            setSearchResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {searchResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
