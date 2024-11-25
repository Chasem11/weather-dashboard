import { useState } from 'react'
import Dashboard from './Components/Dashboard'
import NavBar from './Components/NavBar'
import './styles/App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Dashboard />
    </div>
  )
}

export default App;
