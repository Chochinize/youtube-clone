import React from 'react'
import data from './../../../data.json';
import {MdKeyboardArrowDown as More} from 'react-icons/md'
const Subscriptions = () => {



return (
<div>
    <h4 className='sideBar-main'>
        <section className='side-section'>
            <h2 className='title-sidebar'>SUBSCRIPTIONS</h2>
            {data.map(item=>{
            return (<div className='position' >
               

                <img src={`${process.env.PUBLIC_URL}/assets/avatars/${item.Avatar}`} className='img-avatar' />
                
             
                   
              
                <h4 className='text'>
                    {item.channelName}
                </h4>
            </div>)
            }
            )}
          <h4 className='position'>
          <More className='icons' size={20}/>
            <a href='#' className='text'>Show 45 more</a>
            </h4> 
              

        </section>
    </h4>
</div>
)
}

export default Subscriptions