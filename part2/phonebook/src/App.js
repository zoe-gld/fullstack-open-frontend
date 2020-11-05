import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{name: 'Arto Hellas', number: 555}])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div> name: <input onChange={handleNameChange} value={newName} /></div>
        <div> number: <input onChange={handleNumberChange} value={newNumber} /></div>
        <div> <button type="submit" onClick={addPerson}>add</button> </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p key={person.name}> {person.name}: {person.number} </p>
      )}
    </div>
  )
}

export default App
