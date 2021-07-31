import React from 'react'
import { useParams } from 'react-router'
import {useEffect,useState} from 'react';
import ShowMoreText from 'react-show-more-text'
import Comments from './../Comments/Commets';


const Description = ({...channelvideo}) => {
    
    const {id} = useParams()
    



    const describe = channelvideo.video.map(view=>view.data.items.filter(v=>v.id === id).map(v1=>v1.snippet.description))
    const avatar = channelvideo.channel.map(icon=>icon.data.items.filter(uv=>uv.id === id).map(ava=>ava.snippet.thumbnails.default.url));





    return (
            <div className='moreless'>


            <img src={avatar}/>
            {describe}
            
            <div>
            
            
            </div>

            
        
            </div>
    )
}

export default Description
