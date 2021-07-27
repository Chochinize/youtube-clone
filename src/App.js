import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link, Route, Switch,useParams} from 'react-router-dom';
import axios from 'axios'
import BsideBar from './Components/BodyContent/VideoPage/Watch/BsideBar/BsideBar';
import Explore from './Components/SideBar/TopLogo/Explore';
import Navigation from './Components/index';
import { numFormatter} from './Functions';
import moment from 'moment';
import MainGallery from './Components/BodyContent/MainGallery/Gallery/MainGallery';
import Video from './Components/BodyContent/VideoPage/Watch/Videos/Video';

function App() {

  const [videos,setVideos] = useState([])
  const [channel,setChannel] = useState([])

  
  const API_KEY = 'AIzaSyDdF8fnQb_RRRNwDQx3i5a2LTWrD2tQmDk';
  const API_URL_VIDEO = `${process.env.REACT_APP_API_VIDEO}${API_KEY}`;
  const API_URL_SEARCH = `${process.env.REACT_APP_API_SEARCH}${API_KEY}`;
  
   async function fetchData(url){
        try {
            const res = await axios(url)
            const searchData = res.data.items;
            setVideos(searchData);
            setChannel(searchData.map(item => {
                const res = axios(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
                return res
            })) 
        } catch (error) {
            console.log(error);
        }
    }





  useEffect(()=>{
    fetchData(API_URL_SEARCH)
  },[])

console.log(videos)
console.log(channel)

  const mainContent = videos.map(item=>{
    const time = moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()
    // const views = numFormatter(item.statistics.viewCount);
    return (
<div>
  <Link to={`${item.id.videoId}`}>
  <img src={item.snippet.thumbnails.medium.url} className='img-render'/>
  </Link>
  <h3  className='title-mainpage' >{item.snippet.title}</h3>
  <Link to='/channel'>
  <div className='channel-mainpage'>{item.snippet.channelTitle}</div>
  </Link>

  <div className='viewsandyears-mainpage'>   views <span className='content-container-dot'>&#8226;</span> {time}</div>
</div>         


    )})




  return (
    <div>
      <Router>
        <Navigation prp={mainContent}/>
       
        <Switch>
          
          
          <Route path='/:id' exact/>


          <Route path='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
