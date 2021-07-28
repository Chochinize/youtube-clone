import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link, Route, Switch,useParams} from 'react-router-dom';
import axios from 'axios'
import Navigation from './Components/index';
import Videoplayer from './Components/BodyContent//VideoPage/Videos/Videoplayer'
import MainGallery from  './Components/BodyContent/Gallery/MainPage/MainGallery'
import NotFound from './Components/404';
import VideoPageIndex from './Components/BodyContent/VideoPage/VideoPageIndex';
import Explore from './Components/SideBar/Menu/Explore'
import Subscription from './Components/SideBar/Menu/Subscription'
import Library from './Components/SideBar/Menu/Library'
import History from './Components/SideBar/Menu/History'
import Yourvideos from './Components/SideBar/Menu/Yourvideos'
import WatchLater from './Components/SideBar/Menu/WatchLater'
import Likedvideos from './Components/SideBar/Menu/Likedvideos'
import YouTubePremium from './Components/SideBar/Menu/YouTubePremium'
import MovieandShows from './Components/SideBar/Menu/MovieandShows'
import Gaming from './Components/SideBar/Menu/Gaming'
import Live from './Components/SideBar/Menu/Live'
import Learning from './Components/SideBar/Menu/Learning'
import Sport from './Components/SideBar/Menu/Sport'
import Settings from './Components/SideBar/Menu/Settings'
import ReportHistory from './Components/SideBar/Menu/ReportHistory'
import Help from './Components/SideBar/Menu/Help'
import SendFeedback from './Components/SideBar/Menu/SendFeedback'

function App() {

















  const [videos,setVideos] = useState([])
  const [channel,setChannel] = useState([])
  const API_KEY = 'AIzaSyD2r-dIzV3aBctoeIYbxwrWz3Gw4-xTrB8';
  const API_URL_VIDEO = `${process.env.REACT_APP_API_VIDEO}${API_KEY}`;
  const API_URL_SEARCH = `${process.env.REACT_APP_API_SEARCH}${API_KEY}`;
  async function fetchData(url){
    try {
        const res = await(await axios(url)).data.items
        setVideos(res);
        const nr = res.map(item =>
        axios(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`));
          for await(let i  of  nr){ 
             channel.push(i);
          }
      } catch (error) {
        console.log(error);
    }
}


  useEffect(()=>{
    fetchData(API_URL_SEARCH)
  },[])

console.log(videos)
console.log(channel)

  




  return (
    <div>
      <Router>
        <Navigation />
 
        <Switch>
        <Route path='/' exact >

          <MainGallery data={videos} />
          
        </Route>
        <Route path={`/${':slug'}`} exact>
          <VideoPageIndex data={videos}/>
        </Route>




       <Route path='/explore' component={Explore}/>
       <Route path='/subscription' component={Subscription}/>
       <Route path='/library' component={Library}/>
       <Route path='/history' component={History}/>
       <Route path='/yourvideos' component={Yourvideos}/>
       <Route path='/watchlater' component={WatchLater}/>
       <Route path='/likedvideos' component={Likedvideos}/>
       <Route path='/youtubepremium' component={YouTubePremium}/>
       <Route path='/moviesanndshows' component={MovieandShows}/>
       <Route path='/gaming' component={Gaming}/>
       <Route path='/live' component={Live}/>
       <Route path='/learnning' component={Learning}/>
       <Route path='/sport' component={Sport}/>
       <Route path='/settings' component={Settings}/>
       <Route path='/reporthistory' component={ReportHistory}/>
       <Route path='/help' component={Help}/>
       <Route path='/sendfeedback' component={SendFeedback}/>

         
       

        <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
