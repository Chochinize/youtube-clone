import React from 'react'
import {MdVideoCall as VideoIcon} from 'react-icons/md'
import {MdApps as Apps} from 'react-icons/md'
import {MdNotifications as Notification} from 'react-icons/md'
import ReactTooltip from 'react-tooltip';

function ButtonsSection() {
    return (
        <div className='buttons'>
            <button className='icon-container'>
                <VideoIcon size={25} data-tip='Create' />
            </button>

            <button className='icon-container'>
                <Apps size={25} data-tip='YouTube Apps' />
            </button>

            <button className='icon-container'>
                <Notification size={25} data-tip='Notifications' />
            </button>

            {/* <button>{isLogged ? 'Sign Out' : 'Sign In'}</button> */}
            <button>Sign In</button>

            <ReactTooltip className='tooltip' backgroundColor='grey' effect='solid' offset="{'top': -10}" delayHide={150} arrowColor='transparent' />
        </div>
    )
}

export default ButtonsSection
