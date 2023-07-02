import { useState, useEffect, createRef } from 'react'
import React from 'react'
import './App.css'
import * as App from './App'
import { Link } from 'react-router-dom';
import * as Home from './Home'

function Help() {

    return (
      <div onMouseDown={(event: any) => {if (event.shiftKey) { event.preventDefault() }}} className="App h-full w-full z-60" >
        <Home.MenuHeader/>
        <div className='pt-24 max-h-max w-full grid justify-items-center gap-8'>
          <div className=' bg-fourthcolor w-full h-20 max-w-4xl flex items-center'>
            <label className=' flex-1 text-2xl text-firstcolor'>Instruction</label>
            <label className=' flex-1 text-base text-secondcolor'>This page contains information you may need</label>
          </div>
          <div className=' bg-fourthcolor w-full max-h-max max-w-4xl'>
            <label className=' flex-1 flex h-14 items-center justify-center text-xl text-firstcolor'>Choose Block</label>
            <div className=' bg-transparent w-full aspect-video px-1'>
              <div className=' bg-thirdcolor w-full h-full'></div>
            </div>
            <label className=' flex-1 flex px-12 py-6 text-base text-secondcolor'>This page contains information you may need</label>
          </div>
        </div>
      </div>
    )
  }
  
  export default Help