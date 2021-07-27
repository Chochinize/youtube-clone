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
  // const [dataVideos, setDataVideos] = useState({
  //   videos: videos,
  //   channel: channel
  // })
  
  const API_KEY = 'AIzaSyBVKDqZtxkhKGXvTtN7vu8Ta-N0YbHaPeM';
  const API_URL_SEARCH = process.env.REACT_APP_API_SEARCH;
  const API_URL_VIDEO = `${process.env.REACT_APP_API_VIDEO}${API_KEY}`;
  
  async function searchVideos(input='guy j'){
    try {
        const res = await axios(`${API_URL_SEARCH}${input}&key=${API_KEY}`)
        const videosArray = res.data.items
        console.log(videosArray)
        setVideos(videosArray)
        console.log(videos)
        let dataChannel = []
        for await (let video of videosArray){
            const res2 = await axios(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${API_KEY}`)
            // setChannel([...channel, res2])
            dataChannel.push(res2)
        }
        setChannel(dataChannel)
        console.log(channel)
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
  }, [])

  // useEffect(()=>{
  //   searchVideos()
  // },[])
  

  return (
    <div>
      <Router>
        <Navigation/>
 
        <Switch>
          <Route path='/' exact>
            <MainGallery videos={videos} channelInfo={channel} />
          </Route>
          {/* <Route path='/:id' component={PassProps}/> */}

          <Route path='/watch?v=:id' />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
