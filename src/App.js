import React from 'react'
import AppRouter from './Route/router'
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
