import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  return (
    <div
      data-testid = "resCard"
      className="w-50 m-4 h-120 rounded-2xl hover:-translate-y-1 transition delay-100 duration-300 ease-in-out"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="w-50 h-50 rounded-t-2xl"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <div className="my-4 py-2">
          <h4 className="break-all">{cuisines.join(",")}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.deliveryTime} minutes </h4>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="hover:-translate-y-1 transition delay-100 duration-300 ease-in-out">
        <label className="absolute bg-gray-800 text-white mx-3 px-2 rounded-lg z-2">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
