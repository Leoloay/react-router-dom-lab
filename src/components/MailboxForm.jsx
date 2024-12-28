import { useNavigate } from "react-router-dom"
import { useState } from "react"
import App from "../App"

const MailboxForm = ({ addBox }) => {
  const navigate = useNavigate()

  const initialForm = {
    boxHolder: "",
    boxSize: "small",
  }

  const [mailboxForm, setMailboxForm] = useState(initialForm)

  const handleChange = (event) => {
    setMailboxForm({ ...mailboxForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addBox(mailboxForm)
    navigate("/mailboxes")
    setMailboxForm(initialForm)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Mailbox</h2>
      <label htmlFor="boxHolder">Holder:</label>
      <input
        type="text"
        id="boxHolder"
        name="boxHolder"
        value={mailboxForm.boxHolder}
        onChange={handleChange}
      />
      <select
        name="boxSize"
        value={mailboxForm.boxSize}
        onChange={handleChange}
      >
        Size:
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <button type="submit">Create Mailbox</button>
    </form>
  )
}

export default MailboxForm
