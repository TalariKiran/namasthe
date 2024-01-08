import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems=useSelector(state=>state.cart.items)
    const dispatch=useDispatch();
    console.log('carttt',cartItems);
    const handleClear=()=>{
        console.log(clearCart,'hey car')
        dispatch(clearCart())
    }
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto p-2 ">
      <button className="p-2 m-2 bg-black text-white rounded-lg"
      onClick={handleClear}>Clear Cart</button>

      {cartItems.length===0?<h1>Your cart is empty add items to cart</h1>:<ItemList items={cartItems}/>}
      
      </div>
    </div>
  );
};

export default Cart;
