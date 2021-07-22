import React from 'react'
import {IoMdHome as Home} from 'react-icons/io'
import { Link } from 'react-router-dom';


const SmallHome = () => {
    return (
        <div>
            
            <div className='main'>
                <Home size={23} className='icons'/>
                <h4 className='text'>Home</h4>
            </div>

        </div>


        
    )
}

export default SmallHome
