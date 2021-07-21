import React from 'react'
import {IoLogoYoutube as YouTubeLogo} from 'react-icons/io';
import {IoMdHome as Home} from 'react-icons/io'
import {FaRegCompass as Compas} from 'react-icons/fa'


const Logo = () => {


      
    
 return (
        <div>
            
               <div className='sideBar-main'>
                <section className='side-section'>

               <h4 className='position no-border'>
               <Home className='icons' size={20}/>
                <a href='#' className='text'>Home</a>
               </h4>
              

               <h4 className='position'>
               <Compas className='icons' size={20}/>
                <span className='text'>Explore</span>
               </h4>

               
               <h4 className='position'>
               <YouTubeLogo className='icons' size={20}/>
                <span className='text'>Subscriptions</span>
               </h4>



            
                </section>

            </div>

        </div>
    )
}

export default Logo
