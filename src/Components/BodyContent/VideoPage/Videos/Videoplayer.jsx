import React from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import Title from './../TitleSection/Titlle'




const Videoplayer = () => {



    
        let  { id  } = useParams();
        


    return (
        <div  className='video-player' >
             <ReactPlayer
          controls={true}
          className='react-player'
          url={`${`https://www.youtube.com/watch?v=${id}`}`}
          width='100%'
          height='100%'
        />  
    

        </div>
    )
}

export default Videoplayer