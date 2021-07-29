import React from 'react'
import { useParams } from 'react-router'

const Description = ({...channelvideo}) => {
    
    const {id} = useParams()
    const describe = channelvideo.video.map(view=>view.data.items.filter(v=>v.id === id).map(v1=>v1.snippet.description))


console.log(describe);
    return (
        <div>
            <h1>{describe}  </h1>
        </div>
    )
}

export default Description
