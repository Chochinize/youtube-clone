import React from 'react';
import VideoCard from './../VideoCard/VideoCard';

function MainGallery(dataVideos) {    

    console.log(dataVideos);
    return (
        <div className='MainGallery'>
            {dataVideos.videos.map(video => <VideoCard key={video.id.videoId} info={video} channelInfo={dataVideos.channel} />)}
        </div>
    )
}

export default MainGallery
