import React from 'react'
import ReactPlayer from 'react-player'
const Video = () => {
    return (
        
        
        <div className='videoPage'>
            
            <ReactPlayer
             className='react-player'
             url='https://www.youtube.com/watch?v=lxtwS_vkeYo' 
             controls={true} 
             width='100%' 
             height='100%' 
             />
            </div>
            
        
    )
}

export default Video
