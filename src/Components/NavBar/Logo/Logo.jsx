import React from 'react'

function Logo() {
    return (
        <div className='logo-container'>
            <img src={`${process.env.PUBLIC_URL}/assets/youtube.png`} alt="youtube logo" />
        </div>
    )
}

export default Logo
