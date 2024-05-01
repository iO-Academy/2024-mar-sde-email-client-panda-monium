const EmailItem = ({
  name,
  date,
  subject,
  body,
  read,
  id,
  setCurrentEmail,
  setShowCloseButton,
}) => {
  let readStatus = "border-gray-300 bg-gray-100 text-black"
  if (read === "0") {
    readStatus = " border-white bg-gray-600 text-white"
  }

  const displayEmail = (e) => {
    fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentEmail(data.data.email)
        setShowCloseButton(true)
        // readStatus = "bg-blue-300"
        // console.log(readStatus)
        // return readStatus
      })
  }

  return (
    <div
      onClick={displayEmail}
      id={id}
      className={`border-solid border-2 p-2 ${readStatus}`}
    >
      <div className="flex justify-between text-sm">
        <h3>{name}</h3>
        <h3>{date}</h3>
      </div>
      <p className="text-xs">{subject}</p>
      <p className="text-xs">{body}</p>
    </div>
  )
}

export default EmailItem
