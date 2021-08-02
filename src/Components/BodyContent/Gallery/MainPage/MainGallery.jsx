import React,{useEffect,useState}from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
import { numFormatter } from '../../../../Functions'


const MainGallery = ({data,...channelvideo}) => {

    const {channel,id} = useParams()
    
    const avatar = channelvideo.channel.map(icon=>icon.data.items.map(ava=>ava.snippet.thumbnails.default.url)).map(img=>img);
    const views = channelvideo.video.map(view=>view.data.items.map(v1=>numFormatter(v1.statistics.viewCount)));
    const title = channelvideo.channel.map((icon,ix)=>icon.data.items.filter(xid=>xid.id === channel).map(uv1=>
        <div >
            <h2>{uv1.snippet.title}</h2>
            <img src={avatar[ix].length >0 ? avatar[ix]: avatar[ix]-1} alt="avatar" className='avatar-a' />
            </div>
        ));


    console.log(views);

        
    const mainContent = data.map((item,idx)=>{
        const time = moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()
        // const views = numFormatter(item.statistics.viewCount);
      
        // const nv = avatar.map((img=>img))
        
        return (
           <div >  
                <Link to={`/watch=${item.id.videoId}/${item.snippet.channelId}`}>
                <img src={item.snippet.thumbnails.medium.url} className='img-render'/>

                <div className='test'> 
                <img src={avatar[idx]} alt="avatar-image"  className='avatar ab' width='38'/>
                 <h3  className='title-mainpage' >{item.snippet.title}</h3>
                </div>
                </Link>
                
                
                <Link to={`/c/${item.snippet.channelTitle.replace(/ /g, '')}`} key={idx}>
                
                
                
                <div className='channel-mainpage'>
                    {item.snippet.channelTitle}
                </div>
                
                </Link>
                <div className='viewsandyears-mainpage'> {views[idx]}  views <span className='content-container-dot'>&#8226;</span> {time}</div>
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
