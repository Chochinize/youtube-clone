import React from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';





const Videoplayer = () => {



    
        let  {slug  } = useParams();
        


    return (
        <div   >
             <ReactPlayer
          className='react-player'
          url={`${`https://www.youtube.com/watch?v=${slug}`}`}
          width='100%'
          height='100%'
        />  
    

        </div>
    )
}

export default Videoplayer
