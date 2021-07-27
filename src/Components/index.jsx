import {useState,useEffect, useCallback} from 'react';
import NavBar from './NavBar/index'
import SideBar from './SideBar/index';
import SmallBar from './smallBar/index';
import axios from 'axios'
import moment from 'moment'
import {numFormatter} from './../Functions/index'
import { Link } from 'react-router-dom';





const Index = () => {

    

    
    
    const [datavideo,setDatavideo]=useState([]);
    const [channel,setChannel]=useState([])
    const [isToggled, setIsToggled] = useState(true)
    const [cover,setCover] = useState([]);


    console.log(cover);
    console.log(datavideo); 
    console.log(channel); 
    
    
    
   

    const API_KEY = 'AIzaSyCxSyaQezV4aG_5aFDgY7pXvYnpLqX661o';
    const API_URL_SEARCH = `${process.env.REACT_APP_API_SEARCH}${API_KEY}`;
    const API_URL_VIDEO = `${process.env.REACT_APP_API_VIDEO}${API_KEY}`;

    
    const fetchData = async(url)=>{
        try{
           await axios(url)
            .then(res=>{      
                
                
                    
                       
                setChannel(res.data.items.map(id=>axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id.snippet.channelId}&key=AIzaSyD5KE6poU9laMSqoQ4JisL9srV-k9O_W60`).then(rez=>{
                    return rez
                    })))
                const searchData = res.data.items;
                setDatavideo(searchData);
               

           });
            
        } catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
        fetchData(API_URL_VIDEO);
        setCover(mainContent)
    },[])




//   
    












     const mainContent = datavideo.map(item=>{
            const time = moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()
            // const views = numFormatter(item.statistics.viewCount);
      return (         
      <div>
      
      

      <Link to={`${item.id.videoId}`}>
      <img src={item.snippet.thumbnails.medium.url} className='img-render'/>
      </Link>
      
      <h2 className='title-mainpage'>{item.snippet.title}</h2>
      <div className='channel-mainpage'>{item.snippet.channelTitle}</div>
      <div className='viewsandyears-mainpage'>   views <span className='content-container-dot'>&#8226;</span> {time}</div>
      
      </div>         
      )
    }) 
    // const content = {
    //     videocontent:mainContent, 
    //     toggler:isToggled
    // }
  
      

    
    const   handleClick =  useCallback(()=>{

        setIsToggled(!isToggled)
    },[isToggled])
    







    return (
    <>
            <div className="wrapper">
            <NavBar toggleSidebar={()=>handleClick()} />
            {isToggled ? <SideBar   coverProps={cover}/> : <SmallBar coverProps={cover}  />}

            {/* <div className='smallbar'>
            {mainContent}
            </div> */}
            
            
            {/* <ReactPlayer 
             className='react-player'
             url={`${`https://www.youtube.com/watch?v=${item.id}`}`}
             controls={true} 
             width='100%' 
             height='100%' 
            /> */}

           

            
            </div>
            
    
  
        </>
    )
}

export default Index
