import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
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

  const [emailId, setEmailId] = useState()
  console.log(emailId)
  return (
    <>
      <Header />
      <div className="flex w-screen">
        <NavBar />
        <div className="p-4 border w-2/12 min-w-10">
          <Search />
          <div className="overflow-y-auto max-h-screen">
            {emailData.map((email) => (
              <Inbox
                name={email.name}
                date={email.date_created}
                subject={email.subject}
                body={email.body}
                read={email.read}
                id={email.id}
                key={email.id}
                setEmailId={setEmailId}
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

// const handleEmailClick = (emailId) => {
//   // Find the clicked email from the list of emails
//   const clickedEmail = emails.find(email => email.id === emailId);
//   setSelectedEmail(clickedEmail);
// };
// return (
//   <Router>
//     <div className="App">
//       <Header />
//       <div className="flex w-screen">
//         <NavBar />
//         <div className="p-4 border w-2/12 min-w-10">
//           <Search />
//           <div className="overflow-y-auto max-h-screen">
//             {/* Render email previews directly */}
//             {emails.map(email => (
//               <div key={email.id} onClick={() => handleEmailClick(email.id)}>
//                 <h3>{email.subject}</h3>
//                 <p>{email.body}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="w-8/12">
//           {/* Display selected email details here */}
//           {selectedEmail && (
//             <div>
//               <h2>{selectedEmail.subject}</h2>
//               <p>{selectedEmail.body}</p>
//             </div>
//           )}
