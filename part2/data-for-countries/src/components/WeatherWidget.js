import React from 'react'

const WeatherWidget = ({city, weather}) => (
  <>
    <h3>Weather in {city}</h3>
    <p>Temperature: {weather.temperature} degres Celsius</p>
    <p>Humidity: {weather.humidity}%</p>
    <p>Precipitations: {weather.precip}%</p>
    {weather.weather_icons &&
      <img src={weather.weather_icons[0]} alt="Weather icon" style={{width: "100px"}} />
    }
  </>
)

export default WeatherWidget
