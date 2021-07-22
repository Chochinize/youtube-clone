import React from 'react'
import {BiHistory as History} from 'react-icons/bi'
import {MdVideoLibrary as Library }from 'react-icons/md';
import {RiVideoLine as Video} from 'react-icons/ri';
import {MdWatchLater as Later} from 'react-icons/md'
import {AiFillLike as Like } from 'react-icons/ai'
import {MdKeyboardArrowDown as More} from 'react-icons/md'

const Middle = () => {
    return (
        <div>
            <div className='sideBar-main'>
            <section className='side-section'>
            <h4 className='position'>
                
            <Library className='icons' size={20}/>
            <a href='#' className='text'>Library</a>
            </h4>
            
            <h4 className='position'>
            <History className='icons' size={20}/>
            <a href='#' className='text'>History</a>
            </h4>    

            <h4 className='position'>
            <Video className='icons' size={20}/>
            <a href='#' className='text'>Your videos</a>
            </h4>  

            <h4 className='position'>
            <Later className='icons' size={20}/>
            <a href='#' className='text'>Watch later</a>
            </h4>  

            <h4 className='position'>
            <Like className='icons' size={20}/>
            <a href='#' className='text'>Liked videos</a>
            </h4>  
            
            <h4 className='position'>
            <More className='icons' size={20}/>
            <a href='#' className='text'>Show more</a>
            </h4>  


        </section>
            </div>
        </div>
    )
}

export default Middle
