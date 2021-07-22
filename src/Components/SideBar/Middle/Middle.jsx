import React from 'react'
import {BiHistory as History} from 'react-icons/bi'
import {MdVideoLibrary as Library }from 'react-icons/md';
import {RiVideoLine as Video} from 'react-icons/ri';
import {MdWatchLater as Later} from 'react-icons/md'
import {AiFillLike as Like } from 'react-icons/ai'
import {MdKeyboardArrowDown as More} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Middle = () => {
    return (
        <div>
            <div className='sideBar-main'>
            <section className='side-section'>


            <Link to='/Library'>
            <h4 className='position' data-tip='Library'>
            <Library className='icons' size={20}/>
            <span href='#' className='text'>Library</span>
            </h4>
            </Link>
            

            <Link to='/History'>
            <h4 className='position' data-tip='History'>
            <History className='icons' size={20}/>
            <span href='#' className='text'>History</span>
            </h4>    
            </Link>


            <Link to="You videos">
            <h4 className='position' data-tip='Your videos'>
            <Video className='icons' size={20}/>
            <span href='#' className='text'>Your videos</span>
            </h4>  
            </Link>

            <Link to='/Watch later'>

            <h4 className='position' data-tip='Watch later'>
            <Later className='icons' size={20}/>
            <span href='#' className='text'>Watch later</span>
            </h4>  
            </Link>

            <Link to='Liked videos'>
            <h4 className='position' data-tip='Liked videos'>
            <Like className='icons' size={20}/>
            <span href='#' className='text'>Liked videos</span>
            </h4>  
            </Link> 
            



            
            <h4 className='position' data-tip='Show more'>
            <More className='icons' size={20}/>
            <span href='#' className='text'>Show more</span>
            </h4>  


        </section>
            </div>
        </div>
    )
}

export default Middle
