import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
import {numFormatter} from './../Functions/index'
import {BiDotsVerticalRounded} from 'react-icons/bi'

function VideoCard({info}) {

    const views = numFormatter(item.statistics.viewCount)
    const time = moment(video.snippet.publishedAt, "YYYYMMDD").fromNow()

    return (
        <div className='videoCard'>
            <Link to={video.id.videoId}>
                <div className='preview'>
                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    <span className='duration'></span>
                </div>
                <div className='video-info-container'>
                    <div className='avatar-container'>
                        <img src="" alt={``} className='avatar' />
                    </div>
                    <div className='video-text-info'>
                        <h3 className='video-title'>{item.snippet.title}</h3>
                        <div className='data-wrapper'>
                            <Link to={`channelURL`} >
                                <div className='channelName'>{item.snippet.channelTitle}</div>
                            </Link>
                            <div className='metadata'>
                                <span>{views} views</span>
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
