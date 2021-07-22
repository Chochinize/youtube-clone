import React from 'react'
import Logo from './TopLogo/Home';
import Middle from './Middle/Middle';
import Abo from './Subscriptions/Subscriptions'
import More from './More/More';
import MoreExtra from './More/MoreExtra';
import About from './About/About'

import ReactTooltip from 'react-tooltip';
function index() {
    return (
        <aside className='aside'>
        <div className='Scroll'>
           
            
          
            <Logo />
           

            <Middle />
            <Abo />
            <More />
            <MoreExtra />
            <About />
            <ReactTooltip id='sidebar' effect='solid'  place='bottom' backgroundColor='black' delayShow={300} arrowColor='transparent' offset={{'top':10, 'left':10}} className='tooltip'/>
            
        </div>
        </aside>
    )
}

export default index
