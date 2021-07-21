import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import Logo from './Logo/Logo'
import LoginBtn from './Buttons/LoginBtn'
import LogoutBtn from './Buttons/LogoutBtn'
import VideoIcon from './Buttons/AddVideo'
import Apps from './Buttons/YoutubeApps'
import Notifications from './Buttons/Notifications'

const index = () => {

    return (
        <div className='Navbar'>
            <div className='logo-menu'>
                <BurgerMenu />
                <Logo />
            </div>
            <SearchBar />
            <div className='buttons'>
                <VideoIcon />
                <Apps />
                <Notifications />
                <LoginBtn />
            </div>
        </div>
    )
}

export default index
