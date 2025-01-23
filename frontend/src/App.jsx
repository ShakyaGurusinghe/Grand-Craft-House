/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Footer></Footer>
    </>
    
  )
}

export default App
