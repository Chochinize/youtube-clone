import React from 'react'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import Logo from './Logo/Logo'

function LogoMenu({toggleSidebar}) {


    return (
        <div className='logo-menu'>
            <BurgerMenu toggleSidebar={toggleSidebar} />
            <Logo tooltip='YouTube Home' />        
        </div>
    )
}

export default LogoMenu
