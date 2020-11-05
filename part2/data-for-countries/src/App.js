import React, {useState, useEffect} from 'react'
import axios from 'axios'

import SearchInput from './components/SearchInput'
import CountriesShow from './components/CountriesShow'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesFilter, setCountriesFilter] = useState([])

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
      <CountriesShow
        countriesFilter={countriesFilter}
        setCountriesFilter={setCountriesFilter}
      />
    </div>
  )
}

export default App;
