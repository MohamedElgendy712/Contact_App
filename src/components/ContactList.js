import React from 'react'
import {Link} from 'react-router-dom'

function ContactList({contactList , handleSelectedContact}) {
    return (
        <div className='contact-list'>
            {contactList.map((contact) => {
                return <Link 
                                to={`/${contact.first_name}`} 
                                className='link'
                                onClick={() => handleSelectedContact(contact.id)}
                                > 
                                    <li>{contact.first_name} {contact.last_name}</li>
                        </Link>
                        
            })}
        </div>
    )
}

export default ContactList