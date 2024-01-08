import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

import resMenu from "./RestMock";

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    setResInfo(resMenu);
  }, []);
  // const fetchData =  () => {
  //   // const data = await fetch(MENU_URL+resId);
  //   // const json = await data.json();
  
  //   console.log('resInfo',resMenu)
  // };
  return resInfo;
};

export default useRestaurantMenu;
