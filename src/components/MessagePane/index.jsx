import { useEffect, useState } from "react"

const MessagePane = ({
  id,
  formatDate,
  closeButton,
  setCurrentEmailId,
  setShowCloseButton,
  buttonName,
}) => {
  const [currentEmailData, setCurrentEmailData] = useState({})

  const closeEmail = () => {
    setCurrentEmailId(0)
    setShowCloseButton(false)
  }

  const deleteEmail = () => {
    fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }

  useEffect(() => {
    fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentEmailData(data.data.email)
      })
  }, [id])

  return (
    <>
      {currentEmailData && (
        <div
          className={`w-full 
              p-8 
              ${closeButton}
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
            <h2>{currentEmailData.name}</h2>
            <h2>{formatDate(currentEmailData.date_created)}</h2>
          </div>
          <h4 className="text-xs py-2">{currentEmailData.email}</h4>
          <h1 className="text-3xl pb-10">{currentEmailData.subject}</h1>
          <p className="text-sm pb-4 border-b-2">{currentEmailData.body}</p>
          <button
            onClick={deleteEmail}
            className="absolute right-5 mt-4 p-1 border rounded-lg"
          >
            {buttonName}
          </button>
        </div>
      )}
    </>
  )
}
export default MessagePane
