import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCheckCircle } from "react-icons/ai";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"

const VideoCard = ({ video: {id: { videoId}, snippet} }) => {
  return (
    <div className='w-[320px] bg-[#1e1e1e]'>
        {/* thumbnail */}
        <Link to ={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <img className='w-full h-[180px] object-cover' src={snippet?.thumbnails?.high?.url} alt={snippet?.title}/>
        </Link>
        {/* video info */}
        <div className='h-[106px] p-2'>
            {/* title */}
        <Link to ={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <p className='font-bold text-[#fff] text-md'>{snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}</p>
            </Link>

            <Link to ={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <p className='flex gap-2 items-center font-bold text-gray-500 text-sm'>
                {snippet?.channelTitle || demoChannelTitle}
                <AiFillCheckCircle />
                </p>
            </Link>
        </div>

    </div>
    
  )
}

export default VideoCard