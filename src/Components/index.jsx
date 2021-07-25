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

    const param = useParams();
    console.log(param);

    
    const [data,setData]=useState([]);
  


    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `${process.env.REACT_APP_API_SEARCH}${API_KEY}`;

    
    const fetch = async(url)=>{
        try{
           await axios(url).then(data=>{
            const newData = data.data.items;
            setData(newData);
           });
            
        } catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
        fetch(API_URL);
    },[]);



    
    const mainContent = data.map(item=>{
        const time = moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()
        // const views = numFormatter(item.statistics.viewCount);
        return (
  <div>
      <img src={item.snippet.thumbnails.medium.url} className='img-render'/>
      <h3  >{item.snippet.title}</h3>
      <div >{item.snippet.channelTitle}</div>
      <div >   views <span className='content-container-dot'>&#8226;</span> {time}</div>
  </div>         
  
           
        )})
    

    
    const [isToggled, setIsToggled] = useState(true)
    function handleClick() {
        setIsToggled(!isToggled)
    }
    const content = {
        videocontent:mainContent, 
        toggler:isToggled
    }

console.log(content);



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
