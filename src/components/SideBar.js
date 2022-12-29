import React from 'react'
import ContactList from './ContactList'
import Search from './Search'
import Logo from './Logo'

function SideBar({contactList , handleSelectedContact}) {
    return (
        <div className='side-bar'>
            <Search />
            <ContactList contactList={contactList} handleSelectedContact={handleSelectedContact}/>
            <Logo/> 
        </div>
    )
}

export default SideBar