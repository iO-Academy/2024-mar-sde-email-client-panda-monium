import './App.css'
import Header from './components/Header'
import Inbox from './components/Inbox'

function App() {

  return (
    <>
    <Header />
    <Inbox name="name1" date="date1" subject="subject1" body="body1" />
    </>
  )
}

export default App
