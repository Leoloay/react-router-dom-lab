import { useParams } from "react-router-dom"

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams()

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  )
  if (!selectedBox)
    return (
      <div>
        <h1>Mailbox Not Found!</h1>
      </div>
    )
  return (
    <>
      <h1>Mailbox {selectedBox._id}</h1>
      <h2>Details</h2>
      <p>Box holder: {selectedBox.boxHolder}</p>
      <p>Box size: {selectedBox.boxSize}</p>
    </>
  )
}
export default MailboxDetails
