import React from 'react'
import BsideBar from './BsideBar/BsideBar'
import Videoplayer from './Videos/Videoplayer'
import Comments from './Comments/Commets';
import Title from './TitleSection/Titlle';
import Description from './DescriptionSection/Description';

const VideoPageIndex = ({search,...channelvideo}) => {



    return (
        <div className='bside-main'>

<Videoplayer />
<Title search={search} {...channelvideo}/>
<Description  {...channelvideo}/>
<BsideBar  data={search} {...channelvideo}/>      
<Comments/>

        </div>
    )
}

export default VideoPageIndex
