import react from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 m-auto pt-4 pb-2 text-center">
      <h1 className="font-bold text-2xl">Cart</h1>
      {cartItems.length === 0 ? (
        <div className="m-2 space-x-3">
          <h2 className="text-xl">Your cart is empty</h2>
          <h3 className="text-gray-700">
            You can go to home page to view more restaurants
          </h3>
        </div>
      ) : (
        <div>
          <button
            className="m-2 p-2 rounded-md bg-black text-white"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
