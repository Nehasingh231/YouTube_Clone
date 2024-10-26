// this is child of VideoContainer
import React from 'react'

const VideoCards = ({info}) => {
    console.log(info);
    const { snippet, statistics} = info || {} ;
    const { channelTitle, title, thumbnails} = snippet || {};

  return (
    <div className='p-2 m-2 w-80'>
     <img src={thumbnails?.medium?.url} alt='' className='rounded-lg'/>
     <ul>
       <li className='font-bold py-2'>{title}</li>
       <li>{channelTitle}</li>
       <li className=''>{statistics?.viewCount} views</li>
     </ul>
    </div>
  )
}

export default VideoCards;

