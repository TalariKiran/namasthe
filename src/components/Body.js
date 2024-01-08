import React, { useEffect, useState, useContext } from "react";
import RestroCard , { withPromotedLabel } from "./RestroCard";
import resObj from "../utils/mockData";
import ShimmerUi from "./ShimmerUi";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


import { Link } from "react-router-dom";

const Body = () => {
  let resList = resObj[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [fileteredRestaurent, setFileteredRestaurent] = useState([]);

  const RestroCardwithPromoted=withPromotedLabel(RestroCard)
  
  const {loggedIn}=useContext(UserContext);
  console.log('log',loggedIn)
  const {setUserName}=useContext(UserContext)
  console.log('setUser',setUserName)
  const fetchData = async () => {
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    // headers.append('Origin','http://localhost:1234');

    // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
    //   mode: 'no-cors',
    //   headers: headers
    // });
    // console.log('data',data)
    // const response= await data.json();
    // console.log(response,'res')
    setData(resList);
    setFileteredRestaurent(resList);
  };

  const filteredRestaurent = () => {
    //filetr restaurent cards and upadte ui
    // get user entered seacrh text

 
    const filterSearch = data.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    
    if (filterSearch.length > 0) {
      setFileteredRestaurent(filterSearch);
    }
    // else{
    //   setData(resList )
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if(data.length===0){

  //   return <h1><ShimmerUi /></h1>
  // }
  const userOnline = useOnlineStatus();
  if (userOnline === false) {
    return <div>oops . Looks like your offline</div>;
  }
  return data.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="search1">
        <div className="flex">
          <div className=" mx-4 px-4 ">
            <input
              type="text"
              placeholder="search restaurent"
              className="border-solid border-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
          
              }}
            />

            <button
              onClick={filteredRestaurent}
              className="px-4 bg-green-100 m-4 rounded-md"
            >
              Search button
            </button>
          </div>
          <div className="px-4 bg-green-100 m-4 rounded-md">
            <button
              onClick={() => {
                
                resList = resList.filter((item) => item.info.avgRating > 4);
                setData(resList);
             
              }}
            >
              Top Rated Restaurent12
            </button>
            <li>{loggedIn}</li>
        
          </div>
          <input type="text" className="border border-black" value={loggedIn} onChange={(e)=>setUserName(e.target.value)}/>
        </div>

        <div className="flex  flex-wrap justify-between   ">
          {fileteredRestaurent.map((item, index) => {
            return( <Link key={item.id} to={"/restaurant/" + item.id}>
            {item.info.promoted==true ? <RestroCardwithPromoted  resData={item} />: <RestroCard key={index} resData={item} />}
              </Link>)
            
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
