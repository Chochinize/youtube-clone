import React from 'react'
import {AiFillYoutube as LogoIcon} from 'react-icons/ai'
import {MdLocalMovies as Movies} from 'react-icons/md'
import {SiYoutubegaming as Gaming} from 'react-icons/si'
import {IoIosRadio as Live} from  'react-icons/io'
import {AiFillBulb as Light} from 'react-icons/ai'
import {IoIosTrophy as Sport} from 'react-icons/io'
import { Link } from 'react-router-dom'


const index = () => {
    return (
        <div className='sideBar-main' >
        <section className='side-section'>
        <h2 className='title-sidebar'>MORE FROM YOUTUBE</h2>
        

        <Link to='YouTube Premium'>
        <h4 className='position' data-tip='YouTube Premium'  data-for='sidebar'>
       <LogoIcon className='icons' size={20}/>
        <span href='#' className='text'>YouTube Premium</span>
       </h4>
        </Link>
      
          
      <Link to='/Movies&Shows'>
       <h4 className='position' data-tip='Movie & Shows'  data-for='sidebar'>
       <Movies className='icons' size={20}/>
        <span className='text'>Movies & Shows</span>
       </h4>
      </Link>


       <Link to='/Gaming'>
       <h4 className='position' data-tip='Gaming'  data-for='sidebar'>
       <Gaming className='icons' size={20}/>
        <span className='text'>Gaming</span>
       </h4> 
       </Link>


        <Link to='/Live'>
       <h4 className='position' data-tip='Live'  data-for='sidebar'>
       <Live className='icons' size={20}/>
        <span className='text'>Live</span>
       </h4> 
        </Link>

        <Link to='/Learning'>
       <h4 className='position' data-tip='Learning'  data-for='sidebar'>
       <Light className='icons' size={20}/>
        <span className='text'>Learning</span>
       </h4> 
        </Link>



        <Link to='/Sports'>
       <h4 className='position' data-tip='Sports'  data-for='sidebar'>
       <Sport className='icons' size={20}/>
        <span className='text'>Sports</span>
       </h4> 
        </Link>
  



    
        </section>

    </div>
    )
}

export default index
