import React from 'react'

function EditContact() {

    const editContact = JSON.parse(localStorage.getItem('contact'));

    return (
        <div className='edit-contact'>
            <form action={`http://localhost:4000/contact/${editContact._id}`} method='POST' encType='multipart/form-data'>
                <div className='input-container'>
                    <label htmlFor='first_name'>First Name :</label>
                    <input type="text" id='first_name'  name='firstName' defaultValue={editContact.firstName}/>
                </div>
                <div className='input-container'>
                    <label htmlFor='last_name'>Last Name :</label>
                    <input type="text" id='last_name' name='secondName' defaultValue={editContact.secondName}/>
                </div>
                <div className='input-container'>
                    <label htmlFor='nick_name'>Nick Name :</label>
                    <input type="text" id='nick_name' name='nickName' defaultValue={editContact.nickName}/>
                </div>
                <div className='input-container'>
                    <label htmlFor='phone'>Phone :</label>
                    <input type="text" id='phone'  name='phoneNumber' defaultValue={editContact.phoneNumber}/>
                </div>
                {/* <div className='input-container'>
                    <label htmlFor='img'>Upload Image :</label>
                    <input type="file" id='img' accept='image/*' name='image' defaultValue={editContact.photoUrl}/>
                </div> */}
                <input type="submit" id='create' value='Update'/>
            </form>
        </div>
    )
}

export default EditContact