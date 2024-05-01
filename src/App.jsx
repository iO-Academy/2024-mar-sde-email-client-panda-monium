import { useState, useEffect } from "react"
import "./App.css"
import EmailItem from "./components/EmailItem"
import NavBar from "./components/NavBar"

function App() {
  const [emailData, setEmailData] = useState([])
  const [showNavbar, setShowNavbar] = useState(false)

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
        <div className="border min-w-10 sm:w-3/12 w-screen sm:static relative z-0">
          <div className="overflow-y-auto sm:min-w-64 max-h-screen">
            {emailData.map((email) => (
              <EmailItem
                name={email.name}
                date={formatDate(email.date_created)}
                subject={email.subject}
                body={email.body}
                id={email.id}
                key={email.id}
                read={email.read}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
