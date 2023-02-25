import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App'
import './index.css'


import * as ThreeScene from'./threeScene'
import * as Controls from'./controls'

ThreeScene.createScene()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
