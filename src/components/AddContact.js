import React, { useState } from 'react'

function AddContact() {

    return (
        <div className="add-contact">
            <form action='http://localhost:4000/contact' method='POST' encType='multipart/form-data'>
                <div className='input-container'>
                    <label htmlFor='first_name'>First Name :</label>
                    <input type="text" id='first_name'  name='firstName'/>
                </div>
                <div className='input-container'>
                    <label htmlFor='last_name'>Last Name :</label>
                    <input type="text" id='last_name' name='secondName'/>
                </div>
                <div className='input-container'>
                    <label htmlFor='nick_name'>Nick Name :</label>
                    <input type="text" id='nick_name' name='nickName'/>
                </div>
                <div className='input-container'>
                    <label htmlFor='phone'>Phone :</label>
                    <input type="text" id='phone'  name='phoneNumber'/>
                </div>
                <div className='input-container'>
                    <label htmlFor='img'>Upload Image :</label>
                    <input type="file" id='img' accept='image/*' name='image' />
                </div>
                <input type="submit" id='create' value='Create' />
            </form>
        </div>
    )
}

export default AddContact