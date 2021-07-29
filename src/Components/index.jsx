import {useState,useEffect} from 'react';
import NavBar from './NavBar/index'
import SideBar from './SideBar/index';
import SmallBar from './smallBar/index';




const Index = () => {
    const [isToggled, setIsToggled] = useState(true)
    function handleClick(){
        setIsToggled(!isToggled)
    }
    return (
        <>
            <div>
                <NavBar toggleSidebar={handleClick} />
                {isToggled ? <SideBar /> : '' }     
            </div>
        </>
    )
}

export default Index
