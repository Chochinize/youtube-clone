import React from 'react'
import { useParams } from 'react-router'
const Userpage   = ({...channelvideo}) => {

    const {info } = useParams()


    console.log(info);
    console.log(channelvideo.video);

    return (
        <div>
            <h1>USER PAGE</h1>
            <h1>USER PAGE</h1>
            <h1>USER PAGE</h1>
            <h1>USER PAGE</h1>
            <h1>USER PAGE</h1>
            <h1>{info}</h1>
            <h1>{info}</h1>
            <h1>{info}</h1>
            <h1>{info}</h1>
        </div>
    )
}

export default Userpage
