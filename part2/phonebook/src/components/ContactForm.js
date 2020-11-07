import React from 'react'
import contactService from '../services/contacts'

const ContactForm = (props) => {
  const {
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    persons,
    setNotificationMsg,
    setPersons
  } = props

  const handleNameChange = event => {
    setNewName(event.currentTarget.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.currentTarget.value)
  }

  const displayNotification = message => {
    setNotificationMsg(message)
    setTimeout(() => {
      setNotificationMsg(null)
    }, 3000)
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
      if (window.confirm(`${newName} is already in the Phonebook, would you like to update his number`)) {
        const personToUpdate = persons.find(person => person.name === newName)
        const updatedPerson = {...personToUpdate, number: newNumber}
        return contactService
          .update(updatedPerson.id, updatedPerson)
          .then(update => {
            setPersons(persons.map(person => person.name === newName ?  update : person))
            displayNotification(`${update.name} has been updated with number ${update.number}`)
            setNewName('')
            setNewNumber('')
          })
      }
      return
    }

    contactService
      .create(personObject)
      .then(createdContact => {
        setPersons(persons.concat(createdContact))
        displayNotification(`${createdContact.name} has been created`)
        setNewName('')
        setNewNumber('')
      })
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
