import { useState, useEffect, createContext, useContext, useRef, DetailedHTMLProps, LabelHTMLAttributes, DOMElement, createRef, HtmlHTMLAttributes } from 'react'
import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Scene from './Scene'
import Home from './Home'
import Profile from './Profile'
import Help from './Help'

export let isViewOnlyMode: boolean = true;
export function setIsViewOnlyMode(value: boolean) {
  isViewOnlyMode = value
}
export let isLogined: boolean = Boolean(localStorage.getItem('isLogined'))
export function setIsLogined(value: boolean) {
  isLogined = value
}
export let globalScenes = [];
export function setGlobalScenes(value: any) {
  globalScenes = value
}
export let localScenes = [];
export function setLocalScenes(value: any) {
  localScenes = value
}
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
        <Route path="/" element={<Home />}></Route>
        <Route path="/scene" element={<Scene />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="*" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route element={<Home />}></Route>
      </Routes>
     </div>
  )
}

export default App

