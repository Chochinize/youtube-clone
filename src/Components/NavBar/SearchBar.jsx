import React, {useState} from 'react'
import {ImSearch} from 'react-icons/im'

function SearchBar() {
    const [searchInput, setSearchInput] = useState('')

    return (
        <div className='SearchBar'>
            <input type="text" name='search' value={searchInput} placeholder='Search' />
            <ImSearch />
        </div>
    )
}

export default SearchBar
