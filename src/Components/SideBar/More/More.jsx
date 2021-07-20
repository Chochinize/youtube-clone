import React from 'react'
import {AiFillYoutube as LogoIcon} from 'react-icons/ai'
import {MdLocalMovies as Movies} from 'react-icons/md'
import {SiYoutubegaming as Gaming} from 'react-icons/si'
import {IoIosRadio as Live} from  'react-icons/io'
import {AiFillBulb as Light} from 'react-icons/ai'
import {IoIosTrophy as Sport} from 'react-icons/io'


const index = () => {
    return (
        <div className='sideBar-main'>
        <section className='side-section'>
        <h2 className='title-sidebar'>MORE FROM YOUTUBE</h2>
        
    <h4 className='position'>
       <LogoIcon className='icons' size={20}/>
        <a href='#' className='text'>YouTube Premium</a>
       </h4>
      
       <h4 className='position'>
       <Movies className='icons' size={20}/>
        <span className='text'>Movies & Shows</span>
       </h4>

       
       <h4 className='position'>
       <Gaming className='icons' size={20}/>
        <span className='text'>Gaming</span>
       </h4> 

       <h4 className='position'>
       <Live className='icons' size={20}/>
        <span className='text'>Live</span>
       </h4> 

       <h4 className='position'>
       <Light className='icons' size={20}/>
        <span className='text'>Learning</span>
       </h4> 

       <h4 className='position'>
       <Sport className='icons' size={20}/>
        <span className='text'>Sports</span>
       </h4> 
  



    
        </section>

    </div>
    )
}

export default index
