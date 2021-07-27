import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link, Route, Switch,useParams} from 'react-router-dom';
import axios from 'axios'
import BsideBar from './Components/BodyContent/VideoPage/Watch/BsideBar/BsideBar';
import Explore from './Components/SideBar/TopLogo/Explore';
import Navigation from './Components/index';
import PassProps from './Components/SideBar/PassProps/PassProps';
import MainGallery from './Components/BodyContent/MainGallery/Gallery/MainGallery';

function App() {

  const [videos,setVideos] = useState([])
  const [channel,setChannel] = useState([])
  const [dataVideos, setDataVideos] = useState({
    videos: videos,
    channel: channel
  })
  
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL_SEARCH = process.env.REACT_APP_API_SEARCH;
  const API_URL_VIDEO = `${process.env.REACT_APP_API_VIDEO}${API_KEY}`;
  
  async function searchVideos(input=''){
    try {
        const res = await axios(`${API_URL_SEARCH}${input}&key=${API_KEY}`)
        const videosArray = res.data.items
        setVideos(videosArray)
        let dataChannel = []
        for (let video of videosArray){
            const res2 = await axios(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${API_KEY}`)
            // setChannel([...channel, res2])
            dataChannel.push(res2)
        }
        setChannel(dataChannel)


        // for (let video of videosArray){
        //     setChannel([...channel, await getVideoInfo(video.snippet.channelId)])
        //     // dataChannel.push(await getVideoInfo(video.snippet.channelId))
        // }

        // setChannel(dataChannel)
        // return searchData
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    searchVideos()
  },[])

  useEffect(()=>{
    searchVideos(searchInput)
  },[searchInput])

  return (
    <div>
      <Router>
        <Navigation/>
 
        <Switch>
          {/* <Route path='/:id' component={PassProps}/> */}

          <Route path='/watch?v=:id' />

          <Route path='/' component={()=> <MainGallery {...dataVideos} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
