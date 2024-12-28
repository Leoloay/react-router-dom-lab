import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/mailboxes">Mailboxes</NavLink>
      <NavLink to="/new-mailbox">New MailBox</NavLink>
    </nav>
  )
}

export default NavBar
