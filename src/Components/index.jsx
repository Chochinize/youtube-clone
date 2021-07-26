import {useState,useEffect} from 'react';
import NavBar from './NavBar/index'
import SideBar from './SideBar/index';
import SmallBar from './smallBar/index';
import Video from './BodyContent/index';
import axios from 'axios'
import { Link,useParams } from 'react-router-dom';
import Explore from './SideBar/TopLogo/Explore';
import ReactPlayer from 'react-player';
import moment from 'moment'
import {numFormatter} from './../Functions/index'
const Index = () => {

    

    
   
    const [datavideo,setDatavideo]=useState([]);
    const [channel,setChannel]=useState([])
 
    console.log(datavideo); 
    console.log(channel); 
    
    
    
   

    const API_KEY = 'AIzaSyD2r-dIzV3aBctoeIYbxwrWz3Gw4-xTrB8';
    const API_URL_SEARCH = `${process.env.REACT_APP_API_SEARCH}${API_KEY}`;
    const API_URL_VIDEO = `${process.env.REACT_APP_API_VIDEO}${API_KEY}`;

    
    const fetchData = async(url)=>{
        try{
           await axios(url)
            .then(res=>{      
                
                
                    
                       
                setChannel(res.data.items.map(id=>axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id.snippet.channelId}&key=AIzaSyD2r-dIzV3aBctoeIYbxwrWz3Gw4-xTrB8`).then(rez=>{
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
        fetchData(API_URL_SEARCH);
    },[])




//   
    

    const mainContent = datavideo.map(item=>{
        







     

        
            const time = moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()
            // const views = numFormatter(item.statistics.viewCount);
      return (         
      <div>
      <img src={item.snippet.thumbnails.medium.url} className='img-render'/>
      <h3 className='title-mainpage'>{item.snippet.title}</h3>
      <div class='channel-mainpage'>{item.snippet.channelTitle}</div>
      <div className='viewsandyears-mainpage'>   views <span className='content-container-dot'>&#8226;</span> {time}</div>
      </div>         
      )
    })
  
  
      
    

    
    const [isToggled, setIsToggled] = useState(true)
    function handleClick() {
        setIsToggled(!isToggled)
    }


    const content = {
        videocontent:mainContent, 
        toggler:isToggled
    }





    return (
    <>
            <div className="wrapper">
            <NavBar toggleSidebar={()=>handleClick()} />
            {isToggled ? <SideBar  {...content}/> : <SmallBar {...content}/>}

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

            {/* <Video datadown={data}/> */}

            
            </div>
            
    
  
        </>
    )
}

export default Index
