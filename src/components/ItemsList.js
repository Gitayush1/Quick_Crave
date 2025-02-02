import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatches an action
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid = "foodItems"
          key={item.card.info.id}
          className="border-gray-400 border-b-2 p-6 m-2 text-left mb-2 flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-lg text-gray-900 font-Gilroy_Bold">
                {item.card.info.name}
              </span>
              <div className="py-1">
                {" "}
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </div>
            </div>
            <p>{item.card.info.description}</p>
          </div>
          <div className="w-3/12 ml-18">
            <button onClick = {() => handleAddItem(item)} className="absolute cursor-pointer hover:bg-gray-200 font-bold text-green-600 font-Gilroy_Bold w-18 mt-28 shadow-lg mx-8.5 rounded-lg py-1 border-0 bg-white">
              ADD
            </button>
            <img
              className="w-36 px-2 rounded-xl"
              src={CDN_URL + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
