import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function ContactItem({contact}) {
  return (
    <div className='contact-item'>
      <div className='image'></div>
      <div className='info'>
        <h1>{contact.first_name} {contact.last_name}</h1>
        <h3 className='nick-name'>Nick Name</h3>
        <p>+1 703-877-1006</p>
        <div className='btns'>
          <Link to='/edit' className='edit'><Button content='Edit' color='#3992ff'/></Link>
          <Button content='Delete' color='red'/>
        </div>
      </div>
    </div>
  )
}

export default ContactItem