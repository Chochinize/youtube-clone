import React from 'react'
import BsideBar from './BsideBar/BsideBar'
import Videoplayer from './Videos/Videoplayer'
import Comments from './Comments/Commets';
import Title from './TitleSection/Titlle';
import Description from './DescriptionSection/Description';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const linePerPage = 20;   
let arrayforHoldingPosts = [];



const VideoPageIndex = ({search,...channelvideo}) => {
   
    
    



    return (
        <div className='main-grid'>
         <div className='left video'><Videoplayer/>
         <div className='left title'> <Title search={search} {...channelvideo}/></div>    
         <div className='left desc'><Description search={search}  {...channelvideo}/></div>
               
        
        </div>
         <div className='right bside'><BsideBar  data={search} {...channelvideo}/></div>   
         <div className='left comments'><Comments /> </div>
        </div>
    )
}

export default VideoPageIndex
