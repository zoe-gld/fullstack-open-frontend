import React from 'react'

const CountriesListItem = ({country, setCountryShow}) => {
  const handleShowMore = () => setCountryShow(country)
  return (
    <div key={country.name}>
      {country.name}
      {" "}
      <button onClick={handleShowMore}>Show more</button>
    </div>
  )
}

export default CountriesListItem
