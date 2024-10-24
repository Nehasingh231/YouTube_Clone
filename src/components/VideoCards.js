// this is child of VideoContainer
import React from 'react'

const VideoCards = ({info}) => {
    console.log(info)
    const { snippet, statistics} = info;
    const { channelTitle, title, thumbnails} = snippet;
  return (
    <div>
     <img 
     src={thumbnails.medium.url}
     alt=''
     />
     <ul>
       <li>{title}</li>
       <li>{channelTitle}</li>
       <li>{statistics.viewCount}</li>
     </ul>
    </div>
  )
}

export default VideoCards;


// import React from 'react'

// const VideoCards = ({info }) => {
//     console.log(info);
//   return (
//     <div>VideoCards</div>
//   )
// }

// export default VideoCards