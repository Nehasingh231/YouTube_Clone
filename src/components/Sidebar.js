import React from 'react'
import "../App.css"
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FaceIcon from '@mui/icons-material/Face';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useSelector } from 'react-redux';

const Sidebar = () => {
   const isMenuOpen = useSelector(store => store.app.isMenuOpen)
   
   if(!isMenuOpen) return null;
   
   return (
    <div className='sidebar'>
   <SidebarRow selected Icon={HomeIcon} title="Home" />
   <SidebarRow Icon={WhatshotIcon} title="Trending" />
   <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
   <hr/>
   <SidebarRow Icon={FaceIcon} title="Your Channel" />
   <SidebarRow Icon={HistoryIcon} title="History" />
   <SidebarRow Icon={PlaylistPlayIcon} title="Playlist" />
   <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
   <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch Later" />
   <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked Videos" />
   <SidebarRow Icon={DownloadIcon} title="Downloads" />
   <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" /> 
    <hr />
   </div>
  );
}

export default Sidebar;


