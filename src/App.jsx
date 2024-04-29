import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Inbox from "./components/Inbox";
import InboxDetails from './components/InboxDetails'
import NavBar from './components/NavBar'
import Search from './components/Search'

function App() {
  const [emailData, setEmailData] = useState([]);

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
      .then((response) => response.json())
      .then((data) => {
        setEmailData(data.data);
      });
  }, []);

  return (
    <>
      <Header />
    <div className="flex w-screen">
      <NavBar />
      <div className="p-4 border w-2/12 min-w-10">
        <Search />
          {emailData.map((email) => (
        <Inbox
          name={email.name}
          date={email.date_created}
          subject={email.subject}
          body={email.body}
          key={email.id}
        />))}
      </div>
      <InboxDetails />
    </div>
      
    </>
  );
}

export default App;
