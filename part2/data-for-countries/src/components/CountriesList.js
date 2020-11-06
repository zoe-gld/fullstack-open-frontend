import React from 'react'
import CountryInfo from './CountryInfo'
import CountriesListItem from './CountriesListItem'

const CountriesList = ({countriesFilter, setCountriesFilter, setCountryShow}) => {
  if (countriesFilter.length < 10) {
    if (countriesFilter.length === 1) {
      return <CountryInfo country={countriesFilter[0]} />
    }
    return countriesFilter.map(country =>
      <CountriesListItem key={country.name} country={country} setCountryShow={setCountryShow} />
    )
  }
  return <p>Please be more specific with your search criteria</p>
}

export default CountriesList
