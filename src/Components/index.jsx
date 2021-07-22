import React, {useState} from 'react'
import NavBar from './NavBar/index'
import SideBar from './SideBar/index';

const Index = () => {
    const [isToggled, setIsToggled] = useState(true)

    function handleClick() {
        setIsToggled(!isToggled)
    }

    return (
        <>
            <NavBar toggleSidebar={handleClick} />
            {isToggled ? <SideBar/> : null}
        </>
    )
}

export default Index
