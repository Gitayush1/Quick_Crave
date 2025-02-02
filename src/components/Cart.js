import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();
  
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center font-bold text-2xl m-4 p-4 ">
          Welcome to your cart
        </h1>
        <button onClick={handleClearCart} className="p-2 ml-10 bg-black text-white w-24 m-8 cursor-pointer">
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
