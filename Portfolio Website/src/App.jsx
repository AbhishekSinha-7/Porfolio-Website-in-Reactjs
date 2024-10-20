import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

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
