import { useState, useEffect } from "react"
import "./App.css"
import Inbox from "./components/Inbox"
import InboxDetails from "./components/InboxDetails"
import NavBar from "./components/NavBar"
import Search from "./components/Search"

function App() {
  const [emailData, setEmailData] = useState([])

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
      .then((response) => response.json())
      .then((data) => {
        setEmailData(data.data)
      })
  }, [])

  const [hiddenToggle, setHiddenToggle] = useState("hidden")

  function handleClick() {
    if (hiddenToggle === "hidden") {
      setHiddenToggle("block")
    } else {
      setHiddenToggle("hidden")
    }
  }

  return (
    <>
      <div className="flex bg-gray-700 text-white items-center w-screen justify-between p-6">
        <button
          className="border p-2 rounded-md md:hidden"
          onClick={handleClick}
        >
          Menu
        </button>
        <h1>Email Client</h1>
        <div className="flex items-center">
          <span className="md:pr-4 pr-2 text-2xl">
            <i class="fa-solid fa-circle-user"></i>
          </span>
          <h4>User Name</h4>
        </div>
      </div>
      <div className="flex w-screen">
        <NavBar status={hiddenToggle} />
        <div className="p-4 border md:w-2/12 min-w-10 w-screen md:static relative sm:z-0">
          <Search />
          <div className="overflow-y-auto max-h-screen">
            {emailData.map((email) => (
              <Inbox
                name={email.name}
                date={email.date_created}
                subject={email.subject}
                body={email.body}
                key={email.id}
                read={email.read}
              />
            ))}
          </div>
        </div>
        <InboxDetails
          name="name1"
          date_created="date1"
          email="email1"
          subject="subject1"
          body="lorem ipsum......"
        />
      </div>
    </>
  )
}

export default App
