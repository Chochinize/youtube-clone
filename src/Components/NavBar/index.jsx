import React from 'react'
import LogoMenu from './LogoMenu/LogoMenu';
import SearchBar from './SearchBar/SearchBar'
import ButtonsSection from './Buttons/ButtonsSection';


const index = ({toggleSidebar}) => {


    return (
        <div className='Navbar'>
            <LogoMenu toggleSidebar={toggleSidebar} />
            <SearchBar />
            <ButtonsSection />
        </div>
    )
}

export default index
