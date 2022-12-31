import React from 'react'
import {Link} from 'react-router-dom'

function ContactList({contactList , handleSelectedContact}) {
    return (
        <div className='contact-list'>
            {contactList.map((contact) => {
                return <Link 
                                to={`/${contact.firstName}`} 
                                className='link'
                                onClick={() => handleSelectedContact(contact._id)}
                                > 
                                    <li key={contact._id}>{contact.firstName} {contact.secondName}</li>
                        </Link>
                        
            })}
        </div>
    )
}

export default ContactList