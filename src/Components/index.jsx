import {useState,useEffect} from 'react';
import NavBar from './NavBar/index'
import SideBar from './SideBar/index';
import SmallBar from './smallBar/index';
import Video from './BodyContent/index';
import axios from 'axios'



const Index = () => {
    const [data,setData]=useState([]);
    
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `${process.env.REACT_APP_API_VIDEO}${API_KEY}`;

    
    const fetch = async(url)=>{
        try{
           await axios(url).then(data=>{
            const newData = data.data.items;
            setData(newData);
           });
            
        } catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
        fetch(API_URL);
    },[])


    


    
    const [isToggled, setIsToggled] = useState(true)
    function handleClick() {
        setIsToggled(!isToggled)
    }
    






    return (
    <>
            <NavBar toggleSidebar={handleClick} />
            {isToggled ? <SideBar/> : ''}
            
            


            <Video datadown={data}/>
    
           
  
        </>
    )
}

export default Index
