import React from "react";
import { CDN_URL } from "../utils/constants";
import {useContext} from 'react';
import UserContext from "../utils/UserContext";




const RestroCard = (props) => {
  const { name, costForTwo, avgRating, sla, cloudinaryImageId } =
    props.resData.info;
  const { deliveryTime } = sla;
const {loggedIn}=useContext(UserContext)
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg  hover:bg-gray-500">
      <img
        className="rounded-lg"
        alt="res-logo-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRating}</h3>
      <h4>{deliveryTime}</h4>
      <h5>{loggedIn}</h5>
    </div>
  );
};

//HOC
//input restrocard ==>RestrocardPromoted

export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestroCard {...props}/>
      </div>
    );
  };
};

export default RestroCard;
