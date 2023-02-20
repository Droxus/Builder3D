import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import * as ThreeScene from'./threeScene'
import * as Controls from'./controls'

ThreeScene.createScene()
Controls.createCube()
// Controls.addLighting()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
