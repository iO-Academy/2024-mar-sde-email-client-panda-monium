import React, { useState } from "react"
function ComposeEmail({ composeEmailVisible }) {
  const [recipient, setRecipient] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  function handleSubmit(event) {
    event.preventDefault()
    // Prepare the email data
    const emailData = {
      recipient: recipient,
      subject: subject,
      body: body,
    }
    // Send the email data to the API
    fetch("https://email-client-api.dev.io-academy.uk/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        if (response.ok) {
          // Clear the form after successful submission
          setRecipient("")
          setSubject("")
          setBody("")
          // Hide the compose email component
          setComposeEmailVisible(false)
        } else {
          console.error("Failed to send email:", response.statusText)
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error)
      })
  }
  return (
    <div
      className={`border min-w-10 sm:w-3/12 w-screen sm:static relative z-0 ${
        composeEmailVisible ? "" : "hidden"
      }`}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Compose Email</h2>
        <form onSubmit={handleSubmit}>{/* Form inputs */}</form>
      </div>
    </div>
  )
}

export default ComposeEmail
