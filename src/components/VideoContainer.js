import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import VideoCards from './VideoCards';

const VideoContainer = () => {
   const [videos, setVideos] = useState([])
   useEffect(() => {
     getVideos();
   }, []);

   const getVideos = async () => {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setVideos(json.items);
   };

  return (
    <div>
      <VideoCards info={videos[0]} />
    </div>
  )
}

export default VideoContainer