import React from 'react'
import {RiSettings3Fill as Settings} from 'react-icons/ri'
import {MdFlag as Flag} from 'react-icons/md'
import {MdHelp as Help} from 'react-icons/md'
import {RiFeedbackFill as Feedback} from 'react-icons/ri'

const MoreExtra = () => {
    return (
        <div className='sideBar-main'>
        <section className='side-section'>
        
    <h4 className='position'>
       <Settings className='icons' size={20}/>
        <a href='#' className='text'>Settings</a>
       </h4>
      
       <h4 className='position'>
       <Flag className='icons' size={20}/>
        <span className='text'>Report History</span>
       </h4>

       
       <h4 className='position'>
       <Help className='icons' size={20}/>
        <span className='text'>Help</span>
       </h4> 
        
       <h4 className='position'>
       <Feedback className='icons' size={20}/>
        <span className='text'>Send feedback</span>
       </h4>


        </section>

    </div>
    )
}

export default MoreExtra
