import React from 'react'

function Logo() {
    return (
        <div className='logo-container'>
            <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="youtube logo" />
            YouTube
        </div>
    )
}

export default Logo
