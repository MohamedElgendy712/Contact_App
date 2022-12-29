import React, { useState } from 'react'
import ContactItem from './components/ContactItem';
import SideBar from './components/SideBar'
import JSONDATA from './MOCK_DATA.json'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';


function App() {

  const [contact,setContact] = useState({});

  const handleSelectedContact = (contactId) => {
    const temp = JSONDATA.filter((ele) => ele.id === contactId)[0];
    setContact(temp);
  }



  return (
    <BrowserRouter>
      <div className='app-container'>
        <SideBar contactList={JSONDATA} handleSelectedContact={handleSelectedContact}/>
        <div className='contact-container'>
          <Routes>
            <Route path='/:name' element={ <ContactItem contact={contact}/> }></Route>
            <Route path='/' element={<AddContact/>}></Route>
            <Route path='/edit' element={<EditContact/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App