import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App'
import './index.css'
import * as firebase from './firebase'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router basename='/Builder3D'>
      <App />    
    </Router>
  </React.StrictMode>
)
firebase.checkSigning()

