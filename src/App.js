import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link, Route, Switch,useParams} from 'react-router-dom';
import axios from 'axios'
import BsideBar from './Components/BodyContent/VideoPage/Watch/BsideBar/BsideBar';
import Explore from './Components/SideBar/TopLogo/Explore';
import Navigation from './Components/index';
import PassProps from './Components/SideBar/PassProps/PassProps';
import MainGallery from './Components/BodyContent/MainGallery/MainGallery/MainGallery';

function App() {

  const [videos,setVideos] = useState([])
  const [channel,setChannel] = useState([])

  
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL_VIDEO = `${process.env.REACT_APP_API_VIDEO}${API_KEY}`;
  const API_URL_SEARCH = `${process.env.REACT_APP_API_SEARCH}${API_KEY}`;
  
  
//   fetch function
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

  
//   pass  as  props  main cotent if you need to do something with  it
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
        
         <Route path='/:id' component={PassProps}/> 

          <Route path='/watch?v=:id' />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
