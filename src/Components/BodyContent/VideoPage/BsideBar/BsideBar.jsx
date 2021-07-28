import React from 'react'


import moment from 'moment'

import {numFormatter} from '../../../../Functions/index'


const BsideBar = ({data}) => {
   


   
   

 


  



   
    
    const content =  data.map((item,idx)=>{
        const time = moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()
        // const views = numFormatter(item.statistics.viewCount);
        return (
            <div   key={idx} className='content-container'>
        
            
            <img src={item.snippet.thumbnails.default.url} className='content-container-img' key={idx}/>
        
        
            <div className='content-container-info'>
            <h3 className='content-container-title'>{item.snippet.title}</h3>
            
            <div  className='content-container-channel'>{item.snippet.channelTitle}</div>
            
            <div className='content-container-views_timestamp'>  views <span className='content-container-dot'>&#8226;</span> {time}</div>
            </div>
            
               
            
            </div>
  )
  
})
    
             


    
    return (
            <section className='bside-videos'>
                
                {content}
               
            </section>
    )
}

export default BsideBar
