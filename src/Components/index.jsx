import React, {useState} from 'react'
import NavBar from './NavBar/index'
import SideBar from './SideBar/index';
import SmallBar from './smallBar/index'

const Index = () => {
    const [isToggled, setIsToggled] = useState(false)

    function handleClick() {
        setIsToggled(!isToggled)
    }

    return (
        <>
             <NavBar toggleSidebar={handleClick} />
             {isToggled ? <SideBar/> : <SmallBar/>}
        </>
    
           
  
    )
}

export default Index
