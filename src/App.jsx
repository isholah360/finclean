

import './App.css'
import { Outlet } from 'react-router-dom'
import { Footer, Nav} from './component'

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
