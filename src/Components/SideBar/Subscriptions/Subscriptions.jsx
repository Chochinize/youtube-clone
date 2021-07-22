import React from 'react'
import data from './../../../data.json';
import {MdKeyboardArrowDown as More} from 'react-icons/md'
import { Link } from 'react-router-dom';
const Subscriptions = () => {



return (

    <div className='sideBar-main'>
        <section className='side-section'>
            <h2 className='title-sidebar'>SUBSCRIPTIONS</h2>
            {data.map((item,index )=>{
                return (<div key={index}>
                    <Link to={`/${item.channelName}`} className='position' data-tip={`${item.channelName}`}  data-for='sidebar' >
               

                <img src={`${process.env.PUBLIC_URL}/assets/avatars/${item.Avatar}`} className='img-avatar' />
                
             
                   
              
                <h4 className='text'   >

                    {item.channelName}
                </h4>
                    </Link>
            </div>)
            }
            )}
          <h4 className='position'>
          <More className='icons' size={25}/>
            <a  className='text'>Show 45 more</a>
            </h4> 
              

        </section>
    </div>

)
}

export default Subscriptions