import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import token from './store/token'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={token}>
      <App />
    </Provider>
  </React.StrictMode>,
)
