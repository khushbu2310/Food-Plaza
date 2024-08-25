import { useEffect, useState } from "react";
import { RESTAURANT_INFO_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu(resId);
  }, []);

  const fetchMenu = async (resId) => {
    try {
      const data = await fetch(RESTAURANT_INFO_URL + resId);

      const jsonData = await data.json();

      setResInfo(jsonData.data);
    } catch (error) {
      console.error("Failed to fetch restaurant menu", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
