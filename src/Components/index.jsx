import React, {useState} from 'react'
import NavBar from './NavBar/index'
import SideBar from './SideBar/index';
import SmallBar from './smallBar/index';
import Video from './BodyContent/index';

const Index = () => {
    
  

    const API_KEY = process.env.REACT_APP_API_KEY;
    const VIDEO_URL = `${process.env.REACT_APP_API_VIDEO}${API_KEY}`;
    
    
    
    const [isToggled, setIsToggled] = useState(true)
    function handleClick() {
        setIsToggled(!isToggled)
    }
    


console.log(123);



    return (
    <>
            <NavBar toggleSidebar={handleClick} />
            {isToggled ? <SideBar/> : <SmallBar/>}
            
            


            <Video />
    
           
  
        </>
    )
}

export default Index
