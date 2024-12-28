import { Routes, Route } from "react-router-dom"
import "./App.css"
import NavBar from "./components/Navbar"
import MailboxList from "./components/MailboxList"
import MailboxDetails from "./components/MailboxDetails"
import MailboxForm from "./components/MailboxForm"
import { useState } from "react"

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox])
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <h1>Post Office</h1>
              </main>
            }
          />
          <Route
            path="/mailboxes"
            element={<MailboxList mailboxes={mailboxes} />}
          />
          <Route
            path="/mailboxes/:mailboxId"
            element={<MailboxDetails mailboxes={mailboxes} />}
          />
          <Route
            path="/new-mailbox"
            element={<MailboxForm addBox={addBox} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
