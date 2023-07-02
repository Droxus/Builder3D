import { useState, useEffect, createContext, useContext, useRef, DetailedHTMLProps, LabelHTMLAttributes, DOMElement, createRef, HtmlHTMLAttributes } from 'react'
import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Scene from './Scene'
import Home from './Home'
import Profile from './Profile'
import Help from './Help'

// uncomment to update textures
// updateAllTextures()
function updateAllTextures() {
  fetch('https://api.github.com/repos/Droxus/Builder3D/contents/src/assets/textures').then((response) => {
      return response.json()
    }).then((data) => {
      // console.log(data)
      console.log('All textures reloaded')
  })
}

function App() {

  return (
    <div onMouseDown={(event: any) => {if (event.shiftKey) { event.preventDefault() }}} className="App h-full w-full z-60" >
      <Routes>
        <Route path="/Builder3D/" element={<Home />}></Route>
        <Route path="/Builder3D/scene" element={<Scene />}></Route>
        <Route path="/Builder3D/profile" element={<Profile />}></Route>
        <Route path="/Builder3D/help" element={<Help />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
     </div>
  )
}

export default App

