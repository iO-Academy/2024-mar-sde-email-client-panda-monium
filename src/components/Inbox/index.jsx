const Inbox = ({ name, date, subject, body, read, id, setCurrentEmail }) => {
  function reverseDate(dateString) {
    return dateString.split("-").reverse().join("/")
  }

  const displayEmail = (e) => {
    fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setCurrentEmail(data.data.email)
    })
  }

  return (
    <button id={id} onClick={displayEmail} className="">
      {read === "0" ? (
        <div className="border-solid border-2 border-white bg-gray-600 text-white p-2">
          <div className="flex justify-between text-sm">
            <h3>{name}</h3>
            <h3>{reverseDate(date.slice(0, 10))}</h3>
          </div>
          <p className="text-xs">{subject}</p>
          <p className="text-xs">{body}</p>
        </div>
      ) : (
        <div className="border-solid border-2 border-gray-300 bg-gray-100 text-black p-2">
          <div className="flex justify-between text-sm">
            <h3>{name}</h3>
            <h3>{reverseDate(date.slice(0, 10))}</h3>
          </div>
          <p className="text-xs">{subject}</p>
          <p className="text-xs">{body}</p>
        </div>
      )}
    </button>
  )
}

export default Inbox
