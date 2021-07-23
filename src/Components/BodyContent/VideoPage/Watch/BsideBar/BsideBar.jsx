import React from 'react'
import videos from './../../../../../videos.json'
const BsideBar = () => {
    console.log(videos);
    return (
            <section className='bside-videos'>
                    {videos.map(item=>{
                        return (
                            <div className='text'>
                                <h4>{item.title}</h4>
                                <h5>{item.username}</h5>
                                
                                </div>
                        )
                    })}
            </section>
           
        
    )
}

export default BsideBar
