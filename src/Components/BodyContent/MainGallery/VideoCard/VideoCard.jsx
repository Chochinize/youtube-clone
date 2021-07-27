import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
// import {numFormatter} from './../Functions/index'
import {BiDotsVerticalRounded} from 'react-icons/bi'

function VideoCard({video,channelInfo}) {

    // const views = numFormatter(item.statistics.viewCount)
    const time = moment(video.snippet.publishedAt, "YYYYMMDD").fromNow()

    return (
        <div className='videoCard'>
            <Link to={video.id.videoId}>
                <div className='preview'>
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <span className='duration'></span>
                </div>
                <div className='video-info-container'>
                    <div className='avatar-container'>
                        <img src="" alt={``} className='avatar' />
                    </div>
                    <div className='video-text-info'>
                        <h3 className='video-title'>{video.snippet.title}</h3>
                        <div className='data-wrapper'>
                            <Link to={`channelURL`} >
                                <div className='channelName'>{video.snippet.channelTitle}</div>
                            </Link>
                            <div className='metadata'>
                                <span> views</span>
                                <span className='content-container-dot'>&#8226;</span>
                                <span>{time}</span>
                            </div>
                            <div className='dots-container'>
                                <BiDotsVerticalRounded />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default VideoCard
