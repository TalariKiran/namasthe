import React from "react";
import { RESTAURENT_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem,clearCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log("hi", items);
  const  dispatch=useDispatch()
  const handleAddItems = (i) => {
//dispatch an action

dispatch(addItem(i));

  };

  return (
    <div>
   
      {items.map((i) => (
        <div
          key={i.card.info.id}
          className="p-2 m-2  border-gray-200  border-bottom-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{i.card.info.name}</span>
              <span>${Number(i.card.info.price) / 100}</span>
            </div>
            <p className="text-xs">{i.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="mx-16 bg-black text-white  shadow-lg  p-2"
                onClick={()=>handleAddItems(i)}
              >
                Add +
              </button>
            </div>
            <img src={RESTAURENT_URL + i.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
