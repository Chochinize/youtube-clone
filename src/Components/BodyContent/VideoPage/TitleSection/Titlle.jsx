import moment from 'moment';
import React from 'react'
import {matchPath, useParams } from 'react-router'
import { numFormatter } from '../../../../Functions';
import {IoMdThumbsUp as Up ,IoMdThumbsDown as Down } from 'react-icons/io';
import {IoArrowRedoSharp as Arrow } from 'react-icons/io5'
import {RiMenuAddFill as Save} from 'react-icons/ri'
import {HiDotsHorizontal as Dots} from 'react-icons/hi'
const Describe = ({search,...channelvideo}) => {
    const {id} = useParams()
    
    const views= channelvideo.video.map(view=>view.data.items.filter(v=>v.id === id).map(v1=>numFormatter(v1.statistics.viewCount)))
    const likes= channelvideo.video.map(view=>view.data.items.filter(v=>v.id === id).map(v1=>numFormatter(v1.statistics.likeCount)))
    const dislikes= channelvideo.video.map(view=>view.data.items.filter(v=>v.id === id).map(v1=>numFormatter(v1.statistics.dislikeCount)))
    
    console.log(channelvideo.video);
    console.log(views);


  
  const headlineTitle = search.filter(line=>line.id.videoId === id).map(i=>{
      
    const timestamp = moment(i.snippet.publishedAt).format('LL');
    return (
      <div>
          <div className='title'>{i.snippet.title} dasdasdasdadasdasdkajsldkjlasdjkllk</div>
             <div className='likedislike'> {views} views   <span className='timestamp'><span>&#8226;</span> {timestamp}</span> </div>

         
         <div className='thumbs'>
             
              
              <div> <Up  size={22}/> {likes}</div>
              <div><Down size={22}/> {dislikes}</div>
                  
             
              <div><Arrow size={22}/> SHARE</div>
              
              <div><Save size={15}/>SAVE</div>

              <div><Dots size={20}/></div>
              
             
        </div>
             
          </div>
      
        
        )});

// console.log( headlineTitle);

    return (
        <div className='describe-section'>
            <div>{headlineTitle}</div>
            


        </div>
    )
}

export default Describe
