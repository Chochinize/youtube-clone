import React from 'react'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import Logo from './Logo/Logo'

function LogoMenu() {
    return (
        <div className='logo-menu'>
            <BurgerMenu />
            <Logo tooltip='YouTube Home' />        
        </div>
    )
}

export default LogoMenu
