import { useState, useEffect } from "react"
import "./App.css"
import EmailItem from "./components/EmailItem"
import NavBar from "./components/NavBar"
import InboxDetails from "./components/InboxDetails"
import ComposeEmail from "./components/ComposeEmail"

function App() {
  const [emailData, setEmailData] = useState([])
  const [showNavbar, setShowNavbar] = useState(false)
  const [currentEmail, setCurrentEmail] = useState({})
  const [showCloseButton, setShowCloseButton] = useState(false)
  const [selectedEmail, setSelectedEmail] = useState(null)

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
        <ComposeEmail />
        <div className="flex w-screen border min-w-10 sm:static relative z-0">
          <div className="overflow-y-auto sm:min-w-64 max-h-screen">
            {emailData.map((email) => (
              <EmailItem
                name={email.name}
                date={formatDate(email.date_created)}
                subject={email.subject}
                body={email.body}
                read={email.read}
                id={email.id}
                key={email.id}
                setCurrentEmail={setCurrentEmail}
                setShowCloseButton={setShowCloseButton}
                setSelectedEmail={setSelectedEmail}
                selectedEmail={selectedEmail}
              />
            ))}
          </div>
          <InboxDetails
            name={currentEmail.name}
            date={
              currentEmail.date_created
                ? formatDate(currentEmail.date_created)
                : ""
            }
            email={currentEmail.email}
            subject={currentEmail.subject}
            body={currentEmail.body}
            closeButton={showCloseButton ? "block" : "hidden"}
            setCurrentEmail={setCurrentEmail}
            setShowCloseButton={setShowCloseButton}
          />
        </div>
      </div>
    </>
  )
}

export default App
