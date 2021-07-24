import React from 'react'
import Videos from './Videos/Video'
import Bside from './BsideBar/BsideBar'
import Title from './VideoInformation/VideoTitle'

const index = ({datadown}) => {
    return (
        <div className='bside-main'>
            <Videos />
            <Title datadown={datadown}/>
            <Bside datadown={datadown}/>
        </div>
    )
}

export default index
