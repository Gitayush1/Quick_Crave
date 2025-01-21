import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;
  
    const {name,
      cloudinaryImageId,
      avgRating,
      cuisines,
      costForTwo,
      sla
    } = resData?.info;
    return (
      <div className="card" style = {{backgroundColor:'#f0f0f0'}}>
        <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4 className="cuisine-item">{cuisines.join(',')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes </h4>
      </div>
    )
  }

  export default RestaurantCard;