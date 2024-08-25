import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an Action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItem"
          key={item.card.info.id}
          className="p-2 mx-2 my-4 border-b-2 border-orange-200 text-left flex justify-between items-center"
        >
          <div>
            <div>{item.card.info.isVeg === 1 ? "🟩" : "🟥"}</div>
            <div>{item.card.info.name}</div>
            <div>
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </div>
          </div>
          <div className="mb-4 flex justify-center">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt="Item Image"
              className="w-28"
            />
            <div className="absolute place-self-end">
              <button
                className="px-4 bg-green-600 text-white rounded-md"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
