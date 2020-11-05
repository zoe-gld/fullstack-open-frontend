import React from 'react'

const ContactForm = (props) => {
  const {
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    persons,
    setPersons
  } = props

  const handleNameChange = (event) => {
    setNewName(event.currentTarget.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.currentTarget.value)
  }

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

  return (
    <form>
      <div> name: <input onChange={handleNameChange} value={newName} /></div>
      <div> number: <input onChange={handleNumberChange} value={newNumber} /></div>
      <div> <button type="submit" onClick={addPerson}>add</button> </div>
    </form>
  )
}

export default ContactForm
