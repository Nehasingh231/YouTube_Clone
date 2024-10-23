import React from 'react'
import '../App.css';
import '../index.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import DuoIcon from "@mui/icons-material/Duo";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Avatar from "@mui/material/Avatar";
import MicIcon from '@mui/icons-material/Mic';

const Head = () => {
  return (
    <div className='header shadow-lg p-2 m-2'> 
      <div className='header_left'>
         <MenuIcon className='menu_icon'/>
        <img 
        className='header_logo'
        alt="youtube logo"
        src="https://logos-world.net/wp-content/uploads/2020/05/Black-YouTube-logo.png"
        />
        </div>

       <div className="header_input">
         <input type='text' 
         className='rounded'
          placeholder='Search'
         />
         <SearchIcon className="header_inputButton" />
       </div> 
       
       <div>
       <MicIcon className='mic_icon'/>
       </div>
       <div className='header_icons' >
       <DuoIcon className="video_icon" />
       <NotificationsActiveIcon />
       <Avatar
         alt="image"
         src="https://media.licdn.com/dms/image/v2/D4D03AQFy7IL7CNXReQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728745088133?e=1734566400&v=beta&t=FlpU_sRZnUq0G1a84DJwyrDCUE3kT0esJBhLqVVTvL8"
       />
     </div> 
    </div>
  )
}

export default Head