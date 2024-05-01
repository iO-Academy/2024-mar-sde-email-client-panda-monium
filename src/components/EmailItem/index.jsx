const EmailItem = ({ name, date, subject, body, read, id }) => {
  let readStatus = "border-gray-300 bg-gray-100 text-black"
  if (read === "0") {
    readStatus = " border-white bg-gray-600 text-white"
  }

  return (
    <div>
      <div className={`border-solid border-2 p-2 ${readStatus}`}>
        <div id={id} className="flex justify-between text-sm">
          <h3>{name}</h3>
          <h3>{date}</h3>
        </div>
        <p className="text-xs">{subject}</p>
        <p className="text-xs">{body}</p>
      </div>
    </div>
  )
}

export default EmailItem
