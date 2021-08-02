import React from 'react'
import moment from 'moment'
import {numFormatter} from '../../../../Functions/index'
import { Link } from 'react-router-dom'
const BsideBar = ({data,...channelvideo}) => {

    const views = channelvideo.video.map(view=>view.data.items.map(v1=>numFormatter(v1.statistics.viewCount)));



    const content =  data.map((item,idx)=>{
        const time = moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()
        // const views = numFormatter(item.statistics.viewCount);

        
        return (
            <div   key={idx} className='content-container' >  
            <Link to={`/watch=${item.id.videoId}/${item.snippet.channelId}`}>
            <img src={item.snippet.thumbnails.default.url} key={idx} className='content-container-img'/>
            </Link>

            <div className='content-container-info'>
            <Link to={`/watch=${item.id.videoId}`}>
            <h3 className='content-container-title'>{item.snippet.title}</h3>
            </Link>
            <Link to={`/c/${item.snippet.channelTitle.replace(/ /g, '')}`}>
            <div className='contet-container-channel'>{item.snippet.channelTitle}</div>
            </Link>

            <div className='content-container-views_timestamp'> {views[idx]} views <span>&#8226;</span> {time}</div>
           
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
