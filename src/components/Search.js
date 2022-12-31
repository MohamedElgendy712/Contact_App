import React from 'react'
import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Button from './Button'

function Search() {
    return (
        <div className='search-container'>
            <div className='search-section'>
                <MdSearch size='1.3rem' fill='grey'/>
                <input type="text" placeholder='Search...'/>
            </div>
            <Link to='/new'><Button content={'New'} color={'#3992ff'}/></Link>
        </div>
    )
}

export default Search