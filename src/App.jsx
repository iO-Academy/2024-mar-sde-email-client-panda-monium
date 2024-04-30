import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Inbox from "./components/Inbox";

function App() {
  const [emailData, setEmailData] = useState([]);

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
      .then((response) => response.json())
      .then((data) => {
        setEmailData(data.data);
      });
  }, []);

  let x = "string";

  
  return (
    <>
      <Header />
      {emailData.map((email) => (
        <Inbox
          name={email.name}
          date={email.date_created}
          subject={email.subject}
          body={email.body}
          key={email.id}
        />
      ))}
    </>
  );
}

export default App;
