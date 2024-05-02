import { useState } from "react"

const EmailItem = ({
  name,
  date,
  subject,
  body,
  read,
  id,
  setCurrentEmailId,
  setShowCloseButton,
  setSelectedEmail,
  selectedEmail,
}) => {
  let emailColor = "border-gray-300 bg-gray-100 text-black"
  if (selectedEmail === id) {
    emailColor = "bg-blue-500 text-white"
  } else if (read === "0") {
    emailColor = " border-white bg-gray-600 text-white"
  }

  const displayEmail = (e) => {
    setCurrentEmailId(id)
    setShowCloseButton(true)
    setEmailColor(id)
  }

  function setEmailColor(id) {
    setSelectedEmail(id)
  }

  return (
    <div
      onClick={displayEmail}
      id={id}
      className={`border-solid border-2 p-5 w-screen sm:w-full ${emailColor}`}
    >
      <div className="flex justify-between text-sm">
        <h3>{name}</h3>
        <h3>{date}</h3>
      </div>
      <p className="text-xs">{subject}</p>
      <p className="text-xs">{body}</p>
      <button className="sr-only">Open Email</button>
    </div>
  )
}

export default EmailItem
