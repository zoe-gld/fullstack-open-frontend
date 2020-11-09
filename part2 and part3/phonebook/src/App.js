import React, { useState, useEffect } from 'react'
import contactService from './services/contacts'

import SearchBar from './components/SearchBar'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notificationMsg, setNotificationMsg] = useState()

  useEffect(() => {
      contactService
        .getAll()
        .then(initialContacts => {
          setPersons(initialContacts)
        })
    }, [])

  return (
    <div>
      {notificationMsg &&
        <Notification message={notificationMsg} />
      }
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
        setNotificationMsg={setNotificationMsg}
        setPersons={setPersons}
      />

      <h3>Contacts</h3>
      <Contacts
        persons={persons}
        setPersons={setPersons}
        search={search}
      />
    </div>
  )
}

export default App
