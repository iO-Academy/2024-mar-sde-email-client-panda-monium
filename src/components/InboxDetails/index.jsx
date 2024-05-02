const InboxDetails = ({
  name,
  date,
  email,
  subject,
  body,
  closeButton,
  setCurrentEmail,
  setShowCloseButton,
}) => {
  const closeEmail = () => {
    setCurrentEmail({})
    setShowCloseButton(false)
  }

  return (
    <>
      <div
        className={`w-full p-8 ${closeButton}
        bg-white      
        sm:w-8/12 
              w-screen
              h-screen
              sm:static 
              absolute 
              z-10 
      `}
      >
        <div className="flex justify-between text-sm pt-4 border-t-2">
          <h2>{name}</h2>
          <h2>{date}</h2>
        </div>
        <h4 className="text-xs py-2">{email}</h4>
        <h1 className="text-3xl pb-10">{subject}</h1>
        <p className="text-sm pb-4 border-b-2">{body}</p>
        <button
          onClick={closeEmail}
          className="absolute right-5 mt-4 p-1 border rounded-lg"
        >
          Close
        </button>
      </div>
    </>
  )
}
export default InboxDetails
