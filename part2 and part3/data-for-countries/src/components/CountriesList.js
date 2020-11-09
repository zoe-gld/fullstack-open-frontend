import React from 'react'
import CountryInfo from './CountryInfo'

const CountriesList = ({countriesFilter, setCountriesFilter, handleShowMore}) => {

  if (countriesFilter.length < 10) {
    if (countriesFilter.length === 1) {
      return <CountryInfo country={countriesFilter[0]} />
    }
    return countriesFilter.map(country => (
      <div key={country.name}>
        {country.name}
        {" "}
        <button onClick={() => handleShowMore(country)}>Show more</button>
      </div>
    ))
  }
  return <p>Please be more specific with your search criteria</p>
}

export default CountriesList
