import React from 'react'

const SearchBar = ({search, setSearch}) => {
  const handleSearchChange = (event) => {
    setSearch(event.currentTarget.value)
  }

  return(
    <div>
      search contacts: <input onChange={handleSearchChange} value={search} />
    </div>
  )
}

export default SearchBar
