import React, {useState} from 'react'
import {ImSearch as SearchIcon} from 'react-icons/im'
import {MdKeyboardVoice as VoiceIcon} from 'react-icons/md'

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
                    <SearchIcon className='search-icon' size={15} />
                </button>
            </form>
            <VoiceIcon className='voice-icon icon' size={22} />
        </div>
    )
}

export default SearchBar
