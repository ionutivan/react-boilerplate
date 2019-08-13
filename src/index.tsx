import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import DefaultErrorBoudary from './DefaultErrorBoundary'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
      <DefaultErrorBoudary>
    <App />
    </DefaultErrorBoudary>
  </React.StrictMode>,
  document.getElementById('app')
)
