import React from 'react'

const CountryInfo = ({country}) => (
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

export default CountryInfo
