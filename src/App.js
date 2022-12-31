import React, { useEffect, useState } from 'react'
import ContactItem from './components/ContactItem';
import SideBar from './components/SideBar'
//import JSONDATA from './MOCK_DATA.json'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import axios from 'axios';


function App() {
  const [contactList , setContactList] = useState([]);
  const [contact,setContact] = useState({});

  useEffect(()=>{
    axios.get('http://localhost:4000/contact')
    .then((response) =>{
      setContactList(response.data);
    })
    .catch((err) =>{
        console.log(err);
    })
  },[])

  const handleSelectedContact = (contactId) => {
    const temp = contactList.filter((ele) => ele._id === contactId)[0];
    setContact(temp);

  }

  return (
    <BrowserRouter>
      <div className='app-container'>
        <SideBar contactList={contactList} handleSelectedContact={handleSelectedContact}/>
        <div className='contact-container'>
          <Routes>
            <Route path='/:name' element={ <ContactItem contact={contact}/> }></Route>
            <Route path='/new' element={<AddContact/>}></Route>
            <Route path='/edit' element={<EditContact/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App