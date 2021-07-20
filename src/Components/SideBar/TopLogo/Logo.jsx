import React from 'react'
import {IoLogoYoutube as YouTubeLogo} from 'react-icons/io';
import {IoMdHome as Home} from 'react-icons/io'
import {FaRegCompass as Compas} from 'react-icons/fa'

const Logo = () => {
    return (
        <div>
           <h2>
               <Home />
               <YouTubeLogo />
               <Compas />
           </h2>
        </div>
    )
}

export default Logo
