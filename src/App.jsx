import './App.css'
import Header from './components/Header'
import Inbox from './components/Inbox'
import InboxDetails from './components/InboxDetails'
import NavBar from './components/NavBar'
import Search from './components/Search'

function App() {

  return (
    <>
    <Header />
    <div className="flex w-screen">
      <NavBar />
      <div className="p-4 border w-2/12 min-w-10">
        <Search />
        <Inbox name="name1" date="date1" subject="subject1" body="body1" />
      </div>
      <InboxDetails />
    </div>
    </>
  )
}

export default App
