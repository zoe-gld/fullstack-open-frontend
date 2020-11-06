import React from 'react'
import contactService from '../services/contacts'

const Contacts = ({persons, setPersons, search}) => {

  const contactsToShow = persons.filter(
    person => person.name.toUpperCase().includes(search.toUpperCase())
  )

  const handleDeleteClicked = (contact) => {
    if (window.confirm(`Are you sure that you want to delete ${contact.name}?`)) {
      setPersons(persons.filter(person => person.id !== contact.id))
      contactService.deleteContact(contact.id)
    }
  }

  return(
    contactsToShow
      .map(contact =>
          <p key={contact.name}>
            {contact.name}: {contact.number}
            {" "}
            <button onClick={() => handleDeleteClicked(contact)}>Delete contact</button>
          </p>

      )
    )
}

export default Contacts
