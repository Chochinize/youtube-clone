import React from 'react'
import {BiHistory as History} from 'react-icons/bi'
import {MdVideoLibrary as Library }from 'react-icons/md';
import {RiVideoLine as Video} from 'react-icons/ri';
import {MdWatchLater as Later} from 'react-icons/md'
import {RiThumbUpFill as Like } from 'react-icons/ri'
import {MdKeyboardArrowDown as More} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Middle = () => {
    return (
        
            <div className='sideBar-main'>
            <section className='side-section'>



            <Link to='/Library'>
            <h4 className='position' data-tip='Library'  data-for='sidebar'>

            <Library className='icons' size={20}/>
            <span  className='text'>Library</span>
            </h4>
            </Link>
            

            <Link to='/History'>
            <h4 className='position' data-tip='History'  data-for='sidebar'>
            <History className='icons' size={20}/>
            <span  className='text'>History</span>
            </h4>    
            </Link>


            <Link to="You videos">
            <h4 className='position' data-tip='Your videos'  data-for='sidebar'>
            <Video className='icons' size={20}/>
            <span  className='text'>Your videos</span>
            </h4>  
            </Link>

            <Link to='/Watch later'>

            <h4 className='position' data-tip='Watch later'  data-for='sidebar'>
            <Later className='icons' size={20}/>
            <span className='text'>Watch later</span>
            </h4>  
            </Link>

            <Link to='Liked videos'>
            <h4 className='position' data-tip='Liked videos'  data-for='sidebar'>
            <Like className='icons' size={20}/>
            <span  className='text'>Liked videos</span>
            </h4>  
            </Link> 
            



            
            <h4 className='position' data-tip='Show more'  data-for='sidebar'>
            <More className='icons' size={25}/>
            <span  className='text'>Show more</span>
            </h4>  


        </section>
            </div>

    )
}

export default Middle
