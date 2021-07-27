import React from 'react'
import Logo from './TopLogo/Home';
import Middle from './Middle/Middle';
import Abo from './Subscriptions/Subscriptions'
import More from './More/More';
import MoreExtra from './More/MoreExtra';
import About from './About/About'
import ReactTooltip from 'react-tooltip';






const index =({prp}) =>{







 
    return (
        <aside className='aside'>
        <div className='Scroll'>
            <Logo />
            <Middle />
            <Abo />
            <More />
            <MoreExtra />
            <About />
            <ReactTooltip  effect='solid' id='sidebar' place='bottom' backgroundColor='black' delayShow={300} arrowColor='transparent' offset={{'top':10, 'right':40}} className='tooltip'/>
        </div>
            <div className='plus-grid-side'>
                
             {/* <PassProps properties={coverProps}/> */}
                {prp}
              
                </div>
        </aside>
    )
}

export default index
