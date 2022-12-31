import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function ContactItem({contact}) {
const [contactContent,setContactContent] = useState({});

  if(Object.keys(contact).length > 0){
    localStorage.setItem('contact' , JSON.stringify(contact));
  }

  useEffect(() =>{
    setContactContent(JSON.parse(localStorage.getItem('contact')));
  },[])

  return (
    <div className='contact-item'>
      <div className='image'><img src={contactContent.photoUrl} alt="" /></div>
      <div className='info'>
        <h1>{contactContent.firstName} {contactContent.secondName}</h1>
        <h3 className='nick-name'>{contactContent.nickName}</h3>
        <p>{contactContent.phoneNumber}</p>
        <div className='btns'>
          <Link to='/edit' className='edit'><Button content='Edit' color='#3992ff'/></Link>
          <Button content='Delete' color='red'/>
        </div>
      </div>
    </div>
  )
}

export default ContactItem