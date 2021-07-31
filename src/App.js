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










  






  const [search,setSearch] = useState([])
  const [channel,setChannel] = useState([])
  const [video,setVideo] = useState([])
  




  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL_SEARCH = `${process.env.REACT_APP_API_SEARCH}${API_KEY}`;
  const API_URL_VIDEO = `${process.env.REACT_APP_API_VIDEO}`;
  const API_URL_CHANNEL = `${process.env.REACT_APP_API_CHANNEL}`
  
  
  
  async function fetchData(url){
    let result1 = [];
    let result2 = [];
    
    setChannel(result1);
    setVideo(result2);
    try {
      const res = await(await axios(url)).data.items
      setSearch(res);
          const nr =  await res.map(async (item) =>{
            let r1 = await axios.get(`${API_URL_CHANNEL}${item.snippet.channelId}&key=${API_KEY}`);
            let r2 = await axios.get(`${API_URL_VIDEO}${item.id.videoId}&key=${API_KEY}`);
            const [fulfiled1,fulfiled2] = await axios.all([r1,r2]); 
            return {fulfiled1,fulfiled2}; 
          })
          for await (let i of nr){
            result1.push(i.fulfiled1);
            result2.push(i.fulfiled2);
          }
            
          
        } catch (error) {
          console.log(error);
        }
    }
             
              
console.log(search)
          


  useEffect(()=>{
    fetchData(API_URL_SEARCH)
    
  },[])



   
   

 



console.log(channel)
console.log(video)


const channelvideo = {
  channel:channel,
  video:video
};


  return (
    <div>
      <Router>
        <Navigation />
 
        <Switch>
        <Route path='/' exact >

          <MainGallery data={search} {...channelvideo} />
          
        </Route>
        <Route path={`/watch=${':id'}`} >
          <VideoPageIndex search={search} {...channelvideo}/>
        </Route>




       <Route path='/explore' component={Explore} exact/>
       <Route path='/subscription' component={Subscription}exact />
       <Route path='/library' component={Library} exact/>
       <Route path='/history' component={History}exact/>
       <Route path='/yourvideos' component={Yourvideos}exact/>
       <Route path='/watchlater' component={WatchLater} exact/>
       <Route path='/likedvideos' component={Likedvideos}exact/>
       <Route path='/youtubepremium' component={YouTubePremium}exact/>
       <Route path='/moviesanndshows' component={MovieandShows}exact/>
       <Route path='/gaming' component={Gaming}exact/>
       <Route path='/live' component={Live}exact/>
       <Route path='/learnning' component={Learning}exact/>
       <Route path='/sport' component={Sport}exact/>
       <Route path='/settings' component={Settings}exact/>
       <Route path='/reporthistory' component={ReportHistory}exact/>
       <Route path='/help' component={Help}exact/>
       <Route path='/sendfeedback' component={SendFeedback}exact/>

         
       

        {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
