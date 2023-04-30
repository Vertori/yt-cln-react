import React from 'react'
import { VideoCard, ChannelCard } from './'


const Videos = ({ videos }) => {

  return (
    <div className='flex flex-row flex-wrap justify-start gap-8'>
        {videos.map((item, index) => (
            <div key={index}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
                </div>
        ))}
    </div>
  )
}

export default Videos