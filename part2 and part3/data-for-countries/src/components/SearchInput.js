import React from 'react'

const SearchInput = ({countries, setCountriesFilter}) => {
  const handleSearchChange = (event) => {
    const searchInput = event.currentTarget.value
    const countriesSearched = countries
      .filter(country => country.name.toUpperCase().includes(searchInput.toUpperCase()))
    setCountriesFilter(countriesSearched)
  }

  return (
    <>
      Find countries: <input onChange={handleSearchChange} />
    </>
  )
}

export default SearchInput
