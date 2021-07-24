import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';
const BsideBar = ({datadown}) => {
   

    // const [data,setData]=useState([]);

   const API_KEY = process.env.REACT_APP_API_KEY;
   const API_URL = `${process.env.REACT_APP_API_VIDEO}${API_KEY}`;


  
   function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}


   
    console.log(datadown);
    console.log(numFormatter(3660000));
    
    
    const content =  datadown.map((item,idx)=>{
        const time = moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()
        const views = parseFloat(item.statistics.viewCount).toFixed(2);
        return (
            <div   key={idx} >
            <img src={item.snippet.thumbnails.default.url} className='image' key={idx}/>
            <div >

            <h3 className='content-info'>{item.snippet.title}</h3>
            <h4>{item.snippet.channelTitle}</h4>
            <Link>
            <h4>{views} Views ·{time}</h4>
            </Link>    
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
