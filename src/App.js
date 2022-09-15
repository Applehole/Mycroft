import React from 'react'
import AppRouter from './Route/router'
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
