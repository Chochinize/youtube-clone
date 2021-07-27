import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
// import {numFormatter} from './../Functions/index'
import {BiDotsVerticalRounded} from 'react-icons/bi'

<<<<<<< HEAD
function VideoCard({info, channelInfo}) {

    // const views = numFormatter(channelInfo.statistics.viewCount)
    const time = moment(info.snippet.publishedAt, "YYYYMMDD").fromNow()
=======
function VideoCard({video,channelInfo}) {

    // const views = numFormatter(item.statistics.viewCount)
    const time = moment(video.snippet.publishedAt, "YYYYMMDD").fromNow()
>>>>>>> video

    
    return (
        <div className='videoCard'>
            <Link to={info.id.videoId}>
                <div className='preview'>
<<<<<<< HEAD
                    <img src={info.snippet.thumbnails.default.url} alt={info.snippet.title} />
=======
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
>>>>>>> video
                    <span className='duration'></span>
                </div>
                <div className='video-info-container'>
                    <div className='avatar-container'>
                        <img src={channelInfo.data.items[0].snippet.thumbnails.default.url} alt={`${info.snippet.channelTitle} avatar`} className='avatar' />
                    </div>
                    <div className='video-text-info'>
<<<<<<< HEAD
                        <h3 className='video-title'>{info.snippet.title}</h3>
                        <div className='data-wrapper'>
                            <Link to={`/c/${channelInfo.data.items[0].snippet.customUrl}`} >
                                <div className='channelName'>{info.snippet.channelTitle}</div>
=======
                        <h3 className='video-title'>{video.snippet.title}</h3>
                        <div className='data-wrapper'>
                            <Link to={`channelURL`} >
                                <div className='channelName'>{video.snippet.channelTitle}</div>
>>>>>>> video
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
