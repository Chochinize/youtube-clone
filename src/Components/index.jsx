import {useState,useEffect} from 'react';
import NavBar from './NavBar/index'
import SideBar from './SideBar/index';
import SmallBar from './smallBar/index';
import axios from 'axios'
import moment from 'moment'
import {numFormatter} from './../Functions/index'
import { Link } from 'react-router-dom';





const Index = () => {

    const [isToggled, setIsToggled] = useState(true)
    // const [cover,setCover] = useState([]);

    // const API_KEY = process.env.REACT_APP_API_KEY;
    // const API_URL_SEARCH = process.env.REACT_APP_API_SEARCH;
    // const API_URL_VIDEO = `${process.env.REACT_APP_API_VIDEO}${API_KEY}`;
    
    // async function fetchData(url){
    //     try {
    //         const res = await axios(url)
    //         const searchData = res.data.items
    //         console.log(searchData)
    //         // return searchData
    //         setChannel(searchData.map(item => {
    //             const res = axios(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=AIzaSyD5KE6poU9laMSqoQ4JisL9srV-k9O_W60`)
    //             console.log(res)
    //             return res
    //         }))
    //         setDatavideo(searchData)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
    // async function searchVideos(input='cattaneo'){
    //     try {
    //         const res = await axios(`${API_URL_SEARCH}${input}&key=${API_KEY}`)
    //         const videosArray = res.data.items
    //         setDatavideo(videosArray)
    //         let dataChannel = []
    //         for (let video of videosArray){
    //             setChannel([...channel, await getVideoInfo(video.snippet.channelId)])
    //             // dataChannel.push(await getVideoInfo(video.snippet.channelId))
    //         }

    //         // setChannel(dataChannel)
    //         // return searchData
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // async function getVideoInfo(channelID){
    //     const res = await axios(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelID}&key=${API_KEY}`)
    //     return res
    // }

    // async function displayVideo(video){
    //     const time = moment(video.publishedAt, "YYYYMMDD").fromNow()
    //     // const views = numFormatter(item.statistics.viewCount);
    //     const videoCard = (
    //         <div id={video.id.videoId}>
    //             <Link to={`${video.id.videoId}`}>
    //                 <img src={video.thumbnails.medium.url} className='img-render'/>
    //             </Link>
    //             <h2 className='title-mainpage'>{video.title}</h2>
    //             <div className='channel-mainpage'>{video.channelTitle}</div>
    //             <div className='viewsandyears-mainpage'>  views <span className='content-container-dot'>&#8226;</span> {time}</div>
    //         </div> 
    //     )
    //     return videoCard
    // }
    
    

//   

    // const content = {
    //     videocontent:mainContent, 
    //     toggler:isToggled
    // }

    function handleClick(){
        setIsToggled(!isToggled)
    }
    
    return (
        <>
            <div className="wrapper">
                <NavBar toggleSidebar={handleClick} />
                {isToggled ? <SideBar /> : <SmallBar />}
            </div>
        </>
    )
}

export default Index
