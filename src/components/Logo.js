import React from 'react'
import {MdPhone} from 'react-icons/md'

function Logo() {
    return (
        <div className='logo'>
            <MdPhone className='phone-icon' size='1.5rem' fill='green'/>
            <h3>Contact App</h3>
        </div>
    )
}

export default Logo