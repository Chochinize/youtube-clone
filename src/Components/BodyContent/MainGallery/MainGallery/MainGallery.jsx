import React from 'react';
import VideoCard from '../VideoCard/VideoCard';

function MainGallery({videos, channelInfo}) {  

    return (
        <div className='MainGallery'>
            {videos.map((video, idx) => <VideoCard key={video.id.videoId} info={video} channelInfo={channelInfo[idx]} />)}
        </div>
    )
}

export default MainGallery
