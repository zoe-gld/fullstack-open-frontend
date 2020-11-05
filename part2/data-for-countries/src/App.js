import React, {useState, useEffect} from 'react'
import axios from 'axios'

import SearchInput from './components/SearchInput'
import CountriesList from './components/CountriesList'
import CountryInfo from './components/CountryInfo'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesFilter, setCountriesFilter] = useState([])
  const [countryShow, setCountryShow] = useState({})

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }, [])

  return (
    <div>
      <SearchInput
        countries={countries}
        setCountriesFilter={setCountriesFilter}
      />
      <CountriesList
        countriesFilter={countriesFilter}
        setCountriesFilter={setCountriesFilter}
        setCountryShow={setCountryShow}
      />
      {countryShow.name &&
        <CountryInfo
          country={countryShow}
        />
      }

    </div>
  )
}

export default App;
