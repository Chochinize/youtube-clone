import React from 'react'
import {IoMenu} from 'react-icons/io5'

function BurgerMenu({toggleSidebar}) {

    return (
        <button className='icon-container' onClick={toggleSidebar}>
            <IoMenu size={26} />
        </button>
    )
}

export default BurgerMenu
