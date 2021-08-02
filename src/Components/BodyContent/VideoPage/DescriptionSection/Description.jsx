import React from 'react'
import { useParams,useHistory,useRouteMatch,Link   } from 'react-router-dom'
import {useEffect,useState} from 'react';
import ShowMoreText from 'react-show-more-text'
import Comments from './../Comments/Commets';
import { numFormatter } from '../../../../Functions';

const Description = ({search,...channelvideo}) => {
    
    const {id,channel} = useParams()
    let match = useRouteMatch(`${id}/:channel`);
    console.log(channel);

    console.log(id);
    const history = useHistory();



    const describe = channelvideo.video.map(view=>view.data.items.filter(v=>v.id === id).map(v1=>v1.snippet.description))
    const avatar = channelvideo.channel.map(view=>view.data.items.filter(avatarIcon=>avatarIcon.id === channel).map(icon=>icon.snippet.thumbnails.default.url));
    
    const subs = channelvideo.channel.map((icon,ix)=>icon.data.items.filter(xid=>xid.id === channel).map(uv1=>numFormatter(uv1.statistics.subscriberCount)));
    const title = channelvideo.channel.map((icon,ix)=>icon.data.items.filter(xid=>xid.id === channel).map(uv1=>
    <div className='flex'>
        <Link to={`/channel/${channel.replace(/ /g, '')}`}>
        <img src={avatar[ix]} alt="avatar" className='avatar-a' />
        </Link>
        <div>
        
        <div className='desc-title'>{uv1.snippet.title}</div>
        <div className='desc-subs'>{subs} subscribers</div>
        <div className='f'>{describe}</div>   
        <div>SHOW MORE</div>
        </div>
      
        </div>
    ));
   

console.log(describe);



    return (
            <>
                    <div className='flex'> 
                            <div>{title}</div>
                            <div className='f'>
                            {/* <div>{describe}</div>   */}
                            </div>
                            {/* <div className='subscribe'>SUBSCRIBE</div> */}
                            <h4>SUBSCRIBE</h4>
                    </div>

            </ >
    )
}

export default Description
