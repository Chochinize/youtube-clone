import {useState,useEffect} from 'react';
import NavBar from './NavBar/index'
import SideBar from './SideBar/index';
import SmallBar from './smallBar/index';






const Index = ({prp}) => {

    const [isToggled, setIsToggled] = useState(true)
    
    function handleClick(){
        setIsToggled(!isToggled)
    }
    
    return (
        <>
            <div className="wrapper">
                <NavBar toggleSidebar={handleClick} />
                {isToggled ? <SideBar prp={prp}/> : <SmallBar  prp={prp} />}
                
            </div>
        </>
    )
}

export default Index
