import { useState, useEffect } from "react"
import "./App.css"
import EmailItem from "./components/EmailItem"
import NavBar from "./components/NavBar"

function App() {
  const [emailData, setEmailData] = useState([])
  const [toggleNavbar, setToggleNavbar] = useState(true)

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
      .then((response) => response.json())
      .then((data) => {
        setEmailData(data.data)
      })
  }, [])

  function handleMenuClick() {
    if (toggleNavbar === true) {
      setToggleNavbar(false)
    } else {
      setToggleNavbar(true)
    }
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
            <i class="fa-solid fa-circle-user"></i>
          </span>
          <h4>User Name</h4>
        </div>
      </div>
      <div className="flex w-screen">
        <NavBar status={toggleNavbar} />
        <div className="p-4 border sm:w-2/12 min-w-10 w-screen sm:static relative z-0">
          <div className="overflow-y-auto max-h-screen">
            {emailData.map((email) => (
              <EmailItem
                name={email.name}
                date={email.date_created}
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
