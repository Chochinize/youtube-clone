import React from 'react'
import {RiSettings3Fill as Settings} from 'react-icons/ri'
import {MdFlag as Flag} from 'react-icons/md'
import {MdHelp as Help} from 'react-icons/md'
import {RiFeedbackFill as Feedback} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const MoreExtra = () => {
    return (
        <div className='sideBar-main'>
        <section className='side-section'>
        

        <Link to='/Settings'>
    <h4 className='position' data-tip='Settings'  data-for='sidebar'>
       <Settings className='icons' size={20}/>
        <span href='#' className='text'>Settings</span>
       </h4>
        </Link>
      

      <Link to='/Report History'>
       <h4 className='position' data-tip='Report History'  data-for='sidebar'>
       <Flag className='icons' size={20}/>
        <span className='text'>Report History</span>
       </h4>
      </Link>


       <Link to='/Help'>
       <h4 className='position' data-tip='Help'  data-for='sidebar'>
       <Help className='icons' size={20}/>
        <span className='text'>Help</span>
       </h4> 
       </Link>
        

        <Link to='/Send feedback'>
       <h4 className='position' data-tip='Send feedback'  data-for='sidebar'>
       <Feedback className='icons' size={20}/>
        <span className='text'>Send feedback</span>
       </h4>
        </Link>


        </section>

    </div>
    )
}

export default MoreExtra
