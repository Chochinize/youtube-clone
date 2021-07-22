import React from 'react'
import {MdSubscriptions as YouTubeLogo} from 'react-icons/md';
import {IoMdHome as Home} from 'react-icons/io'
import {IoMdCompass as Compas} from 'react-icons/io'
import { Link } from 'react-router-dom';

const Logo = () => {


      
    
 return (
        
            
               <div className='sideBar-main'>
                <section className='side-section'>


                <Link to='/'>
               <h4 className='position' data-tip='Home' data-for='sidebar'>
               <Home className='icons' size={23}/>
                <span className='text'>Home</span>
               </h4>
                </Link>
              
                <Link to='expole'>
               <h4 className='position' data-tip='Explore'  data-for='sidebar'>
               <Compas className='icons' size={23}/>
                <span className='text'>Explore</span>
               </h4>
                </Link>

               <Link to='subscriptions'>
               <h4 className='position' data-tip='Subscriptions'  data-for='sidebar'>
               <YouTubeLogo className='icons' size={23}/>
                <span className='text'>Subscriptions</span>
               </h4>
               </Link>



            
                </section>

            </div>

    
    )
}

export default Logo
