const EmailItem = ({ name, date, subject, body, read, id }) => {
  function reverseDate(dateString) {
    return dateString.slice(0, 10).split("-").reverse().join("/")
  }

  return (
    <div>
      {read === "0" ? (
        <div className="border-solid border-2 border-white bg-gray-600 text-white p-2">
          <div id={id} className="flex justify-between text-sm">
            <h3>{name}</h3>
            <h3>{reverseDate(date)}</h3>
          </div>
          <p className="text-xs">{subject}</p>
          <p className="text-xs">{body}</p>
        </div>
      ) : (
        <div className="border-solid border-2 border-gray-300 bg-gray-100 text-black p-2">
          <div id={id} className="flex justify-between text-sm">
            <h3>{name}</h3>
            <h3>{reverseDate(date)}</h3>
          </div>
          <p className="text-xs">{subject}</p>
          <p className="text-xs">{body}</p>
        </div>
      )}
    </div>
  )
}

export default EmailItem
