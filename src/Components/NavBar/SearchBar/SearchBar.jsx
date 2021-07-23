import React, {useState, useEffect} from 'react'
import {ImSearch as SearchIcon} from 'react-icons/im'
import {MdKeyboardVoice as VoiceIcon} from 'react-icons/md'

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('')
    const [videos, setVideos] = useState([])

    const API_URL = `${process.env.REACT_APP_API_URL}${searchQuery}&key=${API_KEY}`;
    const API_KEY = process.env.REACT_APP_API_KEY;

    function handleChange(e){
        setSearchQuery(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    async function fetchData(url){
        const res = await fetch(url)
        const result = await res.json()
        console.log(result)
    }

    return (
        <div className='SearchBar'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='search' value={searchQuery} placeholder='Search' onChange={(e)=>handleChange(e)} autoComplete='false' />
                <button>
                    <SearchIcon size={15} data-tip='Search' data-for='navbar' />
                </button>
            </form>
            {/* <VoiceBtn tooltip='Search with your voice' /> */}
            <button className='icon-container'>
                <VoiceIcon size={25} data-tip='Search with your voice' data-for='navbar' />
            </button>
        </div>
    )
}

export default SearchBar
