import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SearchBar from './components/SearchBar'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <h3>Add a new contact</h3>
      <ContactForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />

      <h3>Contacts</h3>
      <Contacts persons={persons} search={search} />
    </div>
  )
}

export default App
