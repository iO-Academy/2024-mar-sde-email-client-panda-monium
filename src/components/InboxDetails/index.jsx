const InboxDetails = ({ name, date_created, email, subject, body }) => {
  return (
    <div className="w-8/12 my-10 ml-10 p-2 border-t-2 border-b-2">
      <div className="flex justify-between text-sm">
        <h2>{name}</h2>
        <h2>{date_created}</h2>
      </div>
      <h4 className="text-xs">{email}</h4>
      <h1 className="text-3xl pb-10">{subject}</h1>
      <p className="text-sm border-b-2">{body}</p>
    </div>
  )
}

export default InboxDetails
