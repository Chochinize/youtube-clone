import React from 'react'
import {IoMenu} from 'react-icons/io5'
import {FaBars} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'

function BurgerMenu() {
    
    const toggle = () =>{
        console.log(123)
    }

    return (
        <div className='menu-icon'>
            <IoMenu  onClick={toggle} size={26} />
        </div>
    )
}

export default BurgerMenu
