import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
// import {numFormatter} from './../Functions/index'
import {BiDotsVerticalRounded} from 'react-icons/bi'

function VideoCard({info, channelInfo}) {

    // const views = numFormatter(channelInfo.statistics.viewCount)
    const time = moment(info.snippet.publishedAt, "YYYYMMDD").fromNow()

    
    return (
        <div className='videoCard'>
            <Link to={info.id.videoId}>
                <div className='preview'>
                    <img src={info.snippet.thumbnails.default.url} alt={info.snippet.title} />
                    <span className='duration'></span>
                </div>
                <div className='video-info-container'>
                    <div className='avatar-container'>
                        <img src={channelInfo.data.items[0].snippet.thumbnails.default.url} alt={`${info.snippet.channelTitle} avatar`} className='avatar' />
                    </div>
                    <div className='video-text-info'>
                        <h3 className='video-title'>{info.snippet.title}</h3>
                        <div className='data-wrapper'>
                            <Link to={`/c/${channelInfo.data.items[0].snippet.customUrl}`} >
                                <div className='channelName'>{info.snippet.channelTitle}</div>
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


// 
