import React from 'react'
import Logo from './TopLogo/Logo';
import Middle from './Middle/Middle';
import Abo from './Subscriptions/Subscriptions'
import More from './More/More';
import MoreExtra from './More/MoreExtra';
import About from './About/About'
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
           
            
        </div>
        </aside>
    )
}

export default index
