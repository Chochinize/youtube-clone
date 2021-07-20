import React, {useState} from 'react'
import {ImSearch} from 'react-icons/im'

function SearchBar() {
    const [searchInput, setSearchInput] = useState('')

    function handleChange(e){
        setSearchInput(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div className='SearchBar'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='search' value={searchInput} placeholder='Search' onChange={(e)=>handleChange(e)} />
                <button>
                    <ImSearch className='search-icon' size={15} />
                </button>
            </form>
            
        </div>
    )
}

export default SearchBar
