import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const MainGallery = ({data}) => {
    
    

const mainContent = data.map(item=>{
        const time = moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()
        // const views = numFormatter(item.statistics.viewCount);
        return (
           <div>  
                <Link to={`/watch=${item.id.videoId}`}>
                <img src={item.snippet.thumbnails.medium.url} className='img-render'/>
                </Link>
                <h3  className='title-mainpage' >{item.snippet.title}</h3>
                <Link to={`/c/${item.snippet.channelTitle.replace(/ /g, '')}`}>
                <div className='channel-mainpage'>{item.snippet.channelTitle}</div>
                </Link>
                <div className='viewsandyears-mainpage'>   views <span className='content-container-dot'>&#8226;</span> {time}</div>
           </div>         
        )})


    
    return (
        <div> 

        <div className='plus'>

            <div className='Height' >  
            </div>        

      
            <div className='plus-grid'>
            {mainContent}
            
            </div>
            </div>
        </div>
            
        
    )
}

export default MainGallery
