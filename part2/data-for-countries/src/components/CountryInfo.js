import React, {useEffect, useState} from 'react'
import axios from 'axios'

import WeatherWidget from './WeatherWidget'

const CountryInfo = ({country}) => {
  const [weatherInfo, setWeatherInfo] = useState({})

  const apiURL =
    "http://api.weatherstack.com/current?access_key="
    + process.env.REACT_APP_API_KEY
    +`&query=${country.capital}`

  useEffect(() => {
    axios
      .get(apiURL)
      .then(response => setWeatherInfo(response.data))
  }, [apiURL])

  return(
    <div>
      <h2> {country.name} </h2>
      <p> capital: {country.capital} </p>
      <p> population: {country.population} </p>
      <h4>Languages</h4>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={country.flag} alt="Country flag" style={{width: "200px"}} />
      {weatherInfo.current &&
        <WeatherWidget weather={weatherInfo.current} city={weatherInfo.location.name}/>
      }

    </div>
)
}

export default CountryInfo
