import React, { useEffect, useState } from "react";
import "../App.css";
import "../index.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DuoIcon from "@mui/icons-material/Duo";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Avatar from "@mui/material/Avatar";
import MicIcon from "@mui/icons-material/Mic";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    
      // make an API call after every key press
      // but only if difference between 2 API calls is <200ms
    const timer = setTimeout(() => getSearchSuggestions(), 200);

      return() =>{
         clearTimeout(timer)
      }
  },[searchQuery]);

const getSearchSuggestions = async() => {
  console.log(searchQuery);
  const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  const json = await data.json();
  // console.log(json[1]);
};



  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="header shadow-lg p-2 m-2">
      <div className="header_left">
        <MenuIcon className="menu_icon" onClick={() => toggleMenuHandler()} />
    {/**
        <img          
         className="header_logo"           
         alt="youtube logo"           
         src="https://logos-world.net/wp-content/uploads/2020/05/Black-YouTube-logo.png"        
          />
    */}
      <Link to="/">
      <img
      className="header_logo"
      alt="youtube logo"
      src="https://www.gstatic.com/youtube/img/promos/growth/cfab8a3a4b899deee746ddaf96692c609c6f03c6d648efc946d369b1b0928810_244x112.webp"
    />
      </Link> 
      
        
      </div>

      <div className="header_input">
        <input 
            type="text" 
            className="rounded" 
            placeholder="Search" 
            value = {searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
         />
        <SearchIcon className="header_inputButton" />
      </div>
     <div className="suggestions">
      <ul>
       <li>🔍 iphone</li>
       <li> iphone</li>
       <li> iphone</li>
       <li> iphone</li>
       <li> iphone</li>
      </ul>
     </div>
      <div> 
        <MicIcon className="mic_icon" />
      </div>
      <div className="header_icons">
        <DuoIcon className="video_icon" />
        <NotificationsActiveIcon />
        <Avatar
          alt="image"
          src="https://media.licdn.com/dms/image/v2/D4D03AQFy7IL7CNXReQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728745088133?e=1734566400&v=beta&t=FlpU_sRZnUq0G1a84DJwyrDCUE3kT0esJBhLqVVTvL8"
        />
      </div>
    </div>
  );
};

export default Head;
