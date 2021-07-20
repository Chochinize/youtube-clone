import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import Logo from './Logo/Logo'
import LoginBtn from './Buttons/LoginBtn'
import LogoutBtn from './Buttons/LogoutBtn'

const index = () => {

    return (
        <div className='Navbar'>
            <div className='logo-menu'>
                <BurgerMenu />
                <Logo />
            </div>
            <SearchBar />
            <div className='signBtn-container'>
                <LoginBtn />
            </div>
        </div>
    )
}

export default index
