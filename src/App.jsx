import { useState, useEffect } from "react"
import "./App.css"
import EmailItem from "./components/EmailItem"
import NavBar from "./components/NavBar"
import Modal from "./components/Modal"
import MessagePane from "./components/MessagePane"

function App() {
  const [emailData, setEmailData] = useState([])
  const [showNavbar, setShowNavbar] = useState(false)
  const [currentEmailId, setCurrentEmailId] = useState(0)
  const [showCloseButton, setShowCloseButton] = useState(false)
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [composeEmailVisible, setComposeEmailVisible] = useState(false)

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
      .then((response) => response.json())
      .then((data) => {
        setEmailData(data.data)
      })
  }, [])

  function handleMenuClick() {
    setShowNavbar(!showNavbar)
  }

  function formatDate(dateString) {
    const eventDate = new Date(dateString)
    return eventDate.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
  }

  return (
    <>
      <div className="flex bg-gray-700 text-white items-center w-screen justify-between p-6">
        <button
          className="border p-2 rounded-md sm:hidden"
          onClick={handleMenuClick}
        >
          Menu
        </button>
        <h1>Email Client</h1>
        <div className="flex items-center">
          <span className="sm:pr-4 pr-2 text-2xl">
            <i className="fa-solid fa-circle-user"></i>
          </span>
          <h4>User Name</h4>
        </div>
      </div>
      <div className="flex w-screen">
        <NavBar status={showNavbar ? "block" : "hidden"} />

        <div className="flex w-screen border min-w-10 sm:static relative z-0">
          <div className="absolute z-20 bg-white w-full sm:w-1/2 sm:ml-200">
            <Modal />
          </div>
          <div className="overflow-y-auto w-full sm:w-3/12 sm:min-w-64 max-h-screen">
            {emailData.map((email) => (
              <EmailItem
                name={email.name}
                date={formatDate(email.date_created)}
                subject={email.subject}
                body={email.body}
                read={email.read}
                id={email.id}
                key={email.id}
                setCurrentEmailId={setCurrentEmailId}
                setShowCloseButton={setShowCloseButton}
                setSelectedEmail={setSelectedEmail}
                selectedEmail={selectedEmail}
              />
            ))}
          </div>
          <MessagePane
            id={currentEmailId}
            formatDate={formatDate}
            closeButton={showCloseButton ? "block" : "hidden"}
            setShowCloseButton={setShowCloseButton}
            setCurrentEmailId={setCurrentEmailId}
          />
        </div>
      </div>
    </>
  )
}

export default App
