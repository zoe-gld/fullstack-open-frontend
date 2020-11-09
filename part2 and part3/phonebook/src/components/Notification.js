import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={message.includes("has been deleted") ? "error" : "info"}>
      {message}
    </div>
  )
}

export default Notification
