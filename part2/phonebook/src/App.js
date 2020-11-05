import React, { useState } from 'react'

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

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const nameAlreadyHere = persons
      .map(person => person.name)
      .includes(newName)

    if (nameAlreadyHere) {
      return window.alert(`${newName} is already in the Phonebook`)
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.currentTarget.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.currentTarget.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.currentTarget.value)
  }

  const personsToShow = persons.filter(
    person => person.name.toUpperCase().includes(search.toUpperCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div> search contacts: <input onChange={handleSearchChange} value={search} /></div>
      <h2>Add a new contact</h2>
      <form>
        <div> name: <input onChange={handleNameChange} value={newName} /></div>
        <div> number: <input onChange={handleNumberChange} value={newNumber} /></div>
        <div> <button type="submit" onClick={addPerson}>add</button> </div>
      </form>
      <h2>Contacts</h2>
      {personsToShow
        .map(person =>
          <p key={person.name}> {person.name}: {person.number} </p>
      )}
    </div>
  )
}

export default App
