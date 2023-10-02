import React from 'react'

const SearchItems = ({newSearch,setNewSearch}) => {
  return (
     <form className='searchForm' onSubmit={(e) => {
        e.preventDefault()}}>
            <label htmlFor="search">Search</label>
            <input id="search" type="text" role='searchbox' placeholder='Search Items' value={newSearch} onChange={(e)=>setNewSearch(e.target.value)}/>
        </form>
  )
}

export default SearchItems