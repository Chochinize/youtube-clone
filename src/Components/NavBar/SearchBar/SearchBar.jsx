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
                <input type="text" name='search' value={searchInput} placeholder='Search' onChange={(e)=>handleChange(e)} autoComplete='false' />
                <button>
                    <SearchIcon size={15} data-tip='Search' />
                </button>
            </form>
            {/* <VoiceBtn tooltip='Search with your voice' /> */}
            <button className='icon-container'>
                <VoiceIcon size={25} data-tip='Search with your voice' />
            </button>
        </div>
    )
}

export default SearchBar
