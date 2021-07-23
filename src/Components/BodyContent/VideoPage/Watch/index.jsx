import React from 'react'
import Videos from './Videos/Video'
import Bside from './BsideBar/BsideBar'

const index = () => {
    return (
        <div className='bside-main'>
            <Videos />
            <Bside/>
        </div>
    )
}

export default index
