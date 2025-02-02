import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResList, setSearchResList] = useState([]);

  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2067597&lng=79.9406623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const {setUserName, loggedInUser } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-8 flex justify-center">
        <input
          className="block w-90 rounded-md bg-white px-3 py-1.5 text-center text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          type="text"
          data-testid = "searchInput"
          placeholder="Search for Restaurants"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <button
          className="rounded-md mx-2 border-2 border-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset cursor-pointer"
          onClick={() => {
            const searchFilter = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchValue.toLowerCase())
            );

            setSearchResList(searchFilter);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center m-4 ">
        <label className="m-2 pb-2 font-bold">Username :</label>
          <input
            className="block h-10 w-45 rounded-md bg-white px-3 py-1.5 text-start text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
      </div>
      <div className="flex justify-center">
        <button
          className="  border py-1 px-2 rounded-2xl cursor-pointer hover:bg-indigo-500 hover:text-white bg-gray-200"
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
      <div className="flex flex-wrap m-4 mr-2 p-10 ">
        {searchResList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
