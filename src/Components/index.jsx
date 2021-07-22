import React, {useState} from 'react'
import NavBar from './NavBar/index'
import SideBar from './SideBar/index';
import SmallBar from './smallBar/index'
import Video from './BodyContent/index';

const Index = () => {
    const [isToggled, setIsToggled] = useState(true)

    function handleClick() {
        setIsToggled(!isToggled)
    }

    return (
        <>
             <NavBar toggleSidebar={handleClick} />

             {isToggled ? <SideBar/> : ''}
             <Video />
        </>
    
           
  
    )
}

export default Index
