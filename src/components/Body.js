import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";


const Body = () => {

  const [listOfRestaurants,setListOfRestaurants] = useState(restaurants);

    return (
      <div className="body">
          <div className="search-container">
              <input className="search" type="text" placeholder="Search for Restaurants"></input>
              <button className="button">Search</button>
          </div>
          <div className="filter-btn">
              <button className="fil-btn" onClick={()=>{

                  const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.5
                  )

                  setListOfRestaurants(filteredList);

              }}>Top Rated Restaurants</button>
          </div>
          <div className="res-container">
            {listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
          </div>
      </div>
    )
  }

export default Body;