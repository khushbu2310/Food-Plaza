import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowItem }) => {
  const handleClick = () => {
    setShowItem();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-2 bg-orange-100 shadow-lg">
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
