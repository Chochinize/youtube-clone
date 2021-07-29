import React from 'react'
import moment from 'moment'
import {numFormatter} from '../../../../Functions/index'
import { Link } from 'react-router-dom'
const BsideBar = ({data}) => {
    const content =  data.map((item,idx)=>{
        const time = moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()
        // const views = numFormatter(item.statistics.viewCount);
        return (
            <div   key={idx} className='content-container' >  
            <Link to={`/watch=${item.id.videoId}`}>
            <img src={item.snippet.thumbnails.default.url} key={idx} className='content-container-img'/>
            </Link>

            <div className='content-container-info'>
            <Link to={`/watch=${item.id.videoId}`}>
            <h3 className='content-container-title'>{item.snippet.title}</h3>
            </Link>
            <Link to={`/c/${item.snippet.channelTitle.replace(/ /g, '')}`}>
            <div className='contet-container-channel'>{item.snippet.channelTitle}</div>
            </Link>

            <div className='content-container-views_timestamp'>  views <span>&#8226;</span> {time}</div>
            <h1>AHAHAH</h1>
            </div>


            </div>
  )
})
    return (
            <section  className='bside-videos'>              
                {content}
            </section>
    )
}
export default BsideBar
