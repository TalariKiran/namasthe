import React, { useState } from "react";
import { useEffect } from "react";
import resMenu from "../utils/RestMock";
import { MENU_URL ,REST_URL,REMAIN_URL} from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestCategory from "./RestCategory";

const RestaurentMenu = () => {
  const [fetchedRest, setFetchedRest] = useState(null);
const [showIndex,setShowIndex ]=useState(null)

  // const [show,setShow]=useState(true)
  // function handleClick(){
  //   setShow(!show);
  // }

  const {resId}=useParams();
  
  // const fetchResaturant = async () => {
  //   const data=await fetch(REST_URL+resId+REMAIN_URL)
  //   const data2 = resMenu;
  //   setFetchedRest(data2?.data?.cards[0]?.card?.card?.info);
  // };
const resInfo =useRestaurantMenu()

  const { name, id, cuisines, cloudinaryImageId, sla, costForTwoMessage } =
  resMenu?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
  resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;

  const categories=resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item=>item.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  // useEffect(() => {
  //   fetchResaturant();
  // }, []);
  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>

    {categories.map((category,index)=> <RestCategory  data={category.card.card} show={index === showIndex ? true : false} setShowIndex={()=>{
  
      if(showIndex===index){
      setShowIndex(false);
    
    }else{
      setShowIndex(index)
    }
    }} />)}
    </div>
  );
};

export default RestaurentMenu;
