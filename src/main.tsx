import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App'
import './index.css'
import * as firebase from './firebase'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />    
    </Router>
  </React.StrictMode>
)
// firebase.saveData('cities/New York', { capital: true }).then((result) => {
//   console.log(result)
// })
// firebase.readData('cities/New York').then((result) => {
//   console.log(result)
// })
// firebase.readAllData('scenes').then((result) => {
//   console.log(result)
// })
firebase.checkSigning()