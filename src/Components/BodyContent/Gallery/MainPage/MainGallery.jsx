import React,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'


const MainGallery = ({data,...channelvideo}) => {

    
    
    const avatar = channelvideo.channel.map(icon=>icon.data.items.map(ava=>ava.snippet.thumbnails.default.url)).map(img=>img);
 
    

        
    const mainContent = data.map((item,idx)=>{
        const time = moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()
        // const views = numFormatter(item.statistics.viewCount);
      
        // const nv = avatar.map((img=>img))
        
        return (
           <div >  
                <Link to={`/watch=${item.id.videoId}`}>
                <img src={item.snippet.thumbnails.medium.url} className='img-render'/>
                 <h3  className='title-mainpage' >{item.snippet.title}</h3>
                </Link>
                
                
                <Link to={`/c/${item.snippet.channelTitle.replace(/ /g, '')}`} key={idx}>
                
                
                
                <img src={avatar[idx]} alt="avatar-image"  className='avatar ab' width='38'/>
                <div className='channel-mainpage'>
                    {item.snippet.channelTitle}
                </div>
                
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
