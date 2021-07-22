import React from 'react'

function Video() {
    return (
        <div className='video-card'>
            <div className='preview'>
                <img src="" alt="" />
                <span className='duration'></span>
            </div>
            <div className='video-info-container'>
                <div className='avatar-container'>
                    <img src="" alt="" />
                </div>
                <div className='video-text-info'>
                    <h3>video.title</h3>
                    <div className='data-wrapper'>
                        <div className='channelName'>video.channel</div>
                        <div className='metadata'>
                            <span>video.views</span>
                            <span>video.created</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video
