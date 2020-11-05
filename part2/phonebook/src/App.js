import React, { useState } from 'react'

import SearchBar from './components/SearchBar'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
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
