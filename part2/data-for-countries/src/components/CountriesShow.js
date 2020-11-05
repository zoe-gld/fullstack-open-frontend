import React from 'react'

const CountriesShow = ({countriesFilter, setCountriesFilter}) => {
  if (countriesFilter.length < 10) {
    if (countriesFilter.length === 1) {
      const country = countriesFilter[0]
      return (
        <div>
          <h2> {country.name} </h2>
          <p> capital: {country.capital} </p>
          <p> population: {country.population} </p>
          <h4>Languages</h4>
          <ul>
            {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
          </ul>
          <img src={country.flag} alt="Country flag" style={{width: "200px"}} />
        </div>
      )
    }
    return countriesFilter.map(country =>
      <p key={country.name}> {country.name} </p>
    )
  }
  return <p>Please be more specific with your search criteria</p>
}

export default CountriesShow
