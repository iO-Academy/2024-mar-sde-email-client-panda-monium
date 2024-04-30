const NavBar = ({ status }) => {
  return (
    <div
      className={`border text-white h-screen bg-cyan-600 md:p-4 p-8 md:w-1/12 w-1/2 md:static absolute z-10 ${status} md:block`}
    >
      <h3 className="md:py-2 py-4 md:text-sm text-lg">New Email</h3>
      <h3 className="md:py-2 py-4 md:text-sm text-lg">Inbox</h3>
      <h3 className="md:py-2 py-4 md:text-sm text-lg">Sent</h3>
      <h3 className="md:py-2 py-4 md:text-sm text-lg">Deleted</h3>
    </div>
  )
}

export default NavBar
