import React from 'react'

function Logo({tooltip}) {
    return (
        <div className='logo-container'>
            <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="youtube logo" data-tip={tooltip} data-for='sidebar' />
        </div>
    )
}

export default Logo