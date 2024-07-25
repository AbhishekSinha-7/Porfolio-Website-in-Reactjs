import { useState } from 'react'

import './App.css'

import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> hello</h1>
      <Header/>
      <Home/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
