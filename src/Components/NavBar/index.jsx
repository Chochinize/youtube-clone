import React from 'react'
import LogoMenu from './LogoMenu/LogoMenu';
import SearchBar from './SearchBar/SearchBar'
import ButtonsSection from './Buttons/ButtonsSection';


const index = () => {

    return (
        <div className='Navbar'>
            <LogoMenu />
            <SearchBar />
            <ButtonsSection />
        </div>
    )
}

export default index
