import React from 'react'

const Contacts = ({persons, search}) => {

  const contactsToShow = persons.filter(
    person => person.name.toUpperCase().includes(search.toUpperCase())
  )

  return(
    contactsToShow
      .map(contact =>
        <p key={contact.name}> {contact.name}: {contact.number} </p>
      )
    )
}

export default Contacts
