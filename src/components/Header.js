import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import  UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
const Header = () => { 
  // let btnName="Login";
  //useState should not be use out side of component and should not update direclty wihtout any interaction it will update and render and gaian render thew will cause to stacj over flow and many render
  const[btnNameReact,setBtnNameReact]=useState(false);
  
  //if no dependencey then useeffec call at every rendering like state canges componen trender and useeffect callback will be called every time 
  //if depnededncy array is empty thenuseeeffect will call only once after pageload last calling
  //if we keep btnname in dependencey array  [btnNameReact] then it will be calle donly when btnname  is update then it will call useeffect callback
const {loggedIn}=useContext(UserContext)
// console.log('da',loggedIn)

//subscribing the store using selector. 
const cartItems=useSelector(state=>state.cart.items.length)
const cartItem=useSelector(state=>state.cart.items)
console.log('select',cartItem)

  useEffect(()=>{},[btnNameReact])
  const onlineStat=useOnlineStatus()

    return (
      <div className="flex justify-between bg-pink-50 shadow-lg mb-2 m-4  sm:bg-yellow">
        <div className="w-56">
          <img
            src={LOGO_URL}
            className="logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
          <li className="px-4">onlineStatus:{onlineStat ? '✅':'🔴'}</li>
            <li className="px-4"><Link to='/'>Home</Link></li>
            <li className="px-4"><Link to='/about'>About Us</Link></li>
            <li className="px-4"><Link to='/contact'>contact Us</Link> </li>
            <li className="px-4"><Link to='/grocery'>Grocery</Link> </li>
            <li className="px-4 font-bold text-xl"><Link to='/cart'>Cart({cartItems} items)</Link></li>
            <button className="login" onClick={()=>{
      
              setBtnNameReact(!btnNameReact)
         
        
          } }>{btnNameReact? 'login':'logout'}</button>
          <li className="px-4 font-bold"><Link to='/'>{loggedIn}</Link></li>
          </ul>
   
        </div>
      </div>
    );
  };

  export default Header;