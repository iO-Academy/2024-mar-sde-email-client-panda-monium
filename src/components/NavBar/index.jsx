const NavBar = ({ status }) => {
  return (
    <div
      className={`border
       text-white 
       h-screen
        bg-cyan-600 
        md:p-4 
        p-8 
        sm:w-1/12 
        w-1/2 
        sm:static 
        absolute 
        z-10 
        ${status} 
        sm:block 
        sm:min-w-48`}
    >
      <h3 className="sm:py-2 py-4 sm:text-sm text-lg">New Email</h3>
      <h3 className="sm:py-2 py-4 sm:text-sm text-lg">Inbox</h3>
      <h3 className="sm:py-2 py-4 sm:text-sm text-lg">Sent</h3>
      <h3 className="sm:py-2 py-4 sm:text-sm text-lg">Deleted</h3>
    </div>
  )
}

export default NavBar
