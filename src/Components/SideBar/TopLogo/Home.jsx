import React from 'react'
import {IoLogoYoutube as YouTubeLogo} from 'react-icons/io';
import {IoMdHome as Home} from 'react-icons/io'
import {FaRegCompass as Compas} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Logo = () => {


      
    
 return (
        <div>
            
               <div className='sideBar-main'>
                <section className='side-section'>

                <Link to='/'>

               <h4 className='position' data-tip='Home'>
               <Home className='icons' size={20}/>
                <span className='text'>Home</span>
               </h4>
                </Link>
              
                <Link to='expole'>
               <h4 className='position' data-tip='Explore'>
               <Compas className='icons' size={20}/>
                <span className='text'>Explore</span>
               </h4>
                </Link>

               <Link to='subscriptions'>
               <h4 className='position' data-tip='Subscriptions'>
               <YouTubeLogo className='icons' size={20}/>
                <span className='text'>Subscriptions</span>
               </h4>
               </Link>



            
                </section>

            </div>

        </div>
    )
}

export default Logo
