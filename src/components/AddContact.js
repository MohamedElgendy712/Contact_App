import React, { useState } from 'react'

function AddContact() {

    return (
        <div className="add-contact">
            <form action='localhost//:4000/contact' method='post' encrypt='multipart/form-data'>
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
                    <input type="file" id='img' accept='image/*' name='image'/>
                </div>
                <button id='create'>Create</button>
            </form>
        </div>
    )
}

export default AddContact